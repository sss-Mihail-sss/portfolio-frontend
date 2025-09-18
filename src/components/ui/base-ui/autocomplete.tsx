import { Autocomplete as BaseAutocomplete } from '@base-ui-components/react/autocomplete';
import { type ComponentProps } from 'react';

import { cn } from '@/lib/utils/classnames';

const Autocomplete = (props: ComponentProps<typeof BaseAutocomplete.Root>) => {
  return <BaseAutocomplete.Root {...props} />;
};

const AutocompleteValue = (props: ComponentProps<typeof BaseAutocomplete.Value>) => {
  return <BaseAutocomplete.Value {...props} />;
};

const AutocompleteInput = (props: ComponentProps<typeof BaseAutocomplete.Input>) => {
  return <BaseAutocomplete.Input {...props} />;
};

const AutocompleteTrigger = (props: ComponentProps<typeof BaseAutocomplete.Trigger>) => {
  return <BaseAutocomplete.Trigger {...props} />;
};

const AutocompleteIcon = (props: ComponentProps<typeof BaseAutocomplete.Icon>) => {
  return <BaseAutocomplete.Icon {...props} />;
};

const AutocompleteClear = (props: ComponentProps<typeof BaseAutocomplete.Clear>) => {
  return <BaseAutocomplete.Clear {...props} />;
};

const AutocompleteList = (props: ComponentProps<typeof BaseAutocomplete.List>) => {
  return <BaseAutocomplete.List {...props} />;
};

const AutocompletePortal = (props: ComponentProps<typeof BaseAutocomplete.Portal>) => {
  return <BaseAutocomplete.Portal {...props} />;
};

const AutocompleteBackdrop = (props: ComponentProps<typeof BaseAutocomplete.Backdrop>) => {
  return <BaseAutocomplete.Backdrop {...props} />;
};

const AutocompletePositioner = (props: ComponentProps<typeof BaseAutocomplete.Positioner>) => {
  return <BaseAutocomplete.Positioner {...props} />;
};

const AutocompletePopup = ({ className, ...props }: ComponentProps<typeof BaseAutocomplete.Popup>) => {
  return (
    <BaseAutocomplete.Popup
      className={cn(
        'max-h-[min(var(--available-height),23rem)] w-(--anchor-width) max-w-(--available-width)',
        'scroll-pt-2 scroll-pb-2 overflow-y-auto overscroll-contain rounded-md bg-overlay py-2 shadow-overlay',
        className,
      )}
      {...props}
    />
  );
};

const AutocompleteArrow = (props: ComponentProps<typeof BaseAutocomplete.Arrow>) => {
  return <BaseAutocomplete.Arrow {...props} />;
};

const AutocompleteStatus = ({ className, ...props }: ComponentProps<typeof BaseAutocomplete.Status>) => {
  return (
    <BaseAutocomplete.Status
      className={cn('flex items-center gap-2 py-1 pr-8 pl-4 text-gray-600 text-sm', className)}
      {...props}
    />
  );
};

const AutocompleteEmpty = (props: ComponentProps<typeof BaseAutocomplete.Empty>) => {
  return <BaseAutocomplete.Empty {...props} />;
};

const AutocompleteCollection = (props: ComponentProps<typeof BaseAutocomplete.Collection>) => {
  return <BaseAutocomplete.Collection {...props} />;
};

const AutocompleteRow = (props: ComponentProps<typeof BaseAutocomplete.Row>) => {
  return <BaseAutocomplete.Row {...props} />;
};

const AutocompleteItem = (props: ComponentProps<typeof BaseAutocomplete.Item>) => {
  return <BaseAutocomplete.Item {...props} />;
};

const AutocompleteGroup = (props: ComponentProps<typeof BaseAutocomplete.Group>) => {
  return <BaseAutocomplete.Group {...props} />;
};

const AutocompleteGroupLabel = (props: ComponentProps<typeof BaseAutocomplete.GroupLabel>) => {
  return <BaseAutocomplete.GroupLabel {...props} />;
};

const AutocompleteSeparator = (props: ComponentProps<typeof BaseAutocomplete.Separator>) => {
  return <BaseAutocomplete.Separator {...props} />;
};

export {
  Autocomplete,
  AutocompleteValue,
  AutocompleteInput,
  AutocompleteTrigger,
  AutocompleteIcon,
  AutocompleteClear,
  AutocompleteList,
  AutocompletePortal,
  AutocompleteBackdrop,
  AutocompletePositioner,
  AutocompletePopup,
  AutocompleteArrow,
  AutocompleteStatus,
  AutocompleteEmpty,
  AutocompleteCollection,
  AutocompleteRow,
  AutocompleteItem,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteSeparator,
};
