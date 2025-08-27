import { getCountryCallingCode } from 'libphonenumber-js';
import type { ComponentProps } from 'react';
import {
  type Country,
  type FlagProps,
  type Props as PhoneInputProps,
  default as PhoneNumber,
} from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';

import { cn } from '@/lib/utils/classnames';
import { Input } from '@/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/select';

const PhoneInput = ({ className, ...props }: PhoneInputProps<typeof PhoneInput>) => {
  return (
    <PhoneNumber
      className={cn('flex', className)}
      countrySelectComponent={PhoneNumberSelect}
      inputComponent={PhoneNumberInput}
      flagComponent={PhoneNumberFlag}
      addInternationalOption={false}
      international
      {...props}
    />
  );
};

const PhoneNumberInput = ({ className, ...props }: ComponentProps<'input'>) => {
  return (
    <Input
      className={cn('flex-1 rounded-l-none', className)}
      {...props}
    />
  );
};

type PhoneInputSelectProps = {
  value: Country;
  onChange: (country: Country) => void;
  options: { value: Country; label: string }[];
};

const PhoneNumberSelect = ({ options, value, onChange, ...props }: PhoneInputSelectProps) => {
  return (
    <Select
      value={value}
      onValueChange={onChange}
      {...props}
    >
      <SelectTrigger className="rounded-r-none">
        <SelectValue>
          <PhoneNumberFlag
            country={value}
            countryName={value}
          />
        </SelectValue>
      </SelectTrigger>
      <SelectContent position="popper">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
          >
            <span className="">{option.label}</span>
            <span className="ml-2">(+{getCountryCallingCode(option.value)})</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const PhoneNumberFlag = ({ country, countryName }: FlagProps) => {
  const Flag = flags[country];

  return <span className="flex h-4 w-6">{Flag && <Flag title={countryName} />}</span>;
};

export { PhoneInput };
