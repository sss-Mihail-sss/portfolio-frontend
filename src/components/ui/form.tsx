'use client';

import type { ComponentProps } from 'react';
import { createContext, useContext, useId } from 'react';
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import { Controller, FormProvider, useFormContext } from 'react-hook-form';
import type { VariantProps } from 'tailwind-variants';

import { cn, tv } from '@/lib/utils';
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
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue);

const formVariants = tv({
  slots: {
    item: 'grid gap-3',
    label: '',
    description: 'text-[0.8rem] text-muted-foreground',
    message: 'text-[0.8rem] font-medium',
  },
  variants: {
    error: {
      true: {
        item: 'text-error',
        message: 'text-error',
      },
    },
  },
});

type FormItemProps = ComponentProps<'div'> & VariantProps<typeof formVariants>;

const FormItem = ({ ref, className, ...props }: FormItemProps) => {
  const id = useId();
  const { item } = formVariants();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        ref={ref}
        className={cn(item(), className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
};

const FormLabel = ({ ref, className, ...props }: LabelProps) => {
  const { error, formItemId } = useFormField();
  const { label } = formVariants({ error: !!error });

  return (
    <Label
      ref={ref}
      className={cn(label(), className)}
      htmlFor={formItemId}
      {...props}
    />
  );
};

type FormControlProps = ComponentProps<typeof Slot> & VariantProps<typeof formVariants>;

const FormControl = ({ ref, ...props }: FormControlProps) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
};

type FormDescriptionProps = ComponentProps<'p'> & VariantProps<typeof formVariants>;

const FormDescription = ({ ref, className, ...props }: FormDescriptionProps) => {
  const { formDescriptionId } = useFormField();
  const { description } = formVariants();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn(description(), className)}
      {...props}
    />
  );
};

type FormMessageProps = ComponentProps<'p'> & VariantProps<typeof formVariants>;

const FormMessage = ({ ref, className, children, ...props }: FormMessageProps) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;
  const { message } = formVariants({ error: !!error });

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn(message(), className)}
      {...props}
    >
      {body}
    </p>
  );
};

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField };
