'use client';

import { type ComponentProps, createContext, useContext, useId, useMemo } from 'react';
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
  useFormState,
} from 'react-hook-form';

import { cn } from '@/lib/utils/classnames';
import type { LabelProps } from '@/ui/label';
import { Label } from '@/ui/label';
import { Slot } from '@/ui/slot';

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: ControllerProps<TFieldValues, TName>,
) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  return useMemo(
    () => ({
      id: itemContext.id,
      name: fieldContext.name,
      formItemId: `${itemContext.id}-form-item`,
      formDescriptionId: `${itemContext.id}-form-item-description`,
      formMessageId: `${itemContext.id}-form-item-message`,
      ...fieldState,
    }),
    [fieldContext, itemContext, fieldState],
  );
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue);

const FormItem = ({ className, ...props }: ComponentProps<'div'>) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn('grid gap-2', className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
};

const FormLabel = ({ className, ...props }: LabelProps) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="label"
      data-error={!!error}
      className={cn('font-medium text-sm', !!error && 'text-danger', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
};

const FormControl = ({ ...props }: ComponentProps<typeof Slot>) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={error ? `${formDescriptionId} ${formMessageId}` : `${formDescriptionId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
};

const FormDescription = ({ className, ...props }: ComponentProps<'p'>) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn('text-muted text-sm', className)}
      {...props}
    />
  );
};

const FormMessage = ({ className, children, ...props }: ComponentProps<'p'>) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn('font-medium text-xs', !!error && 'text-danger', className)}
      {...props}
    >
      {body}
    </p>
  );
};

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField };
