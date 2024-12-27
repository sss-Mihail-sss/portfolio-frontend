import {ChevronsRight} from 'lucide-react';

import { Button, buttonVariants } from '@/ui/button';

type Props = {
  params: {
    locale: string;
  }
}

export default function HomePage({}: Props) {
  const variants = buttonVariants.variants;

  return (
    <div className="flex flex-col gap-4">
      <table className="text-sm border-collapse table-auto w-full text-secondary-foreground [&_td]:p-3">
        <thead>
          <tr>
            <td></td>
            {
              Object.keys(variants.variant).map(variant => (
                <td key={variant}>{variant}</td>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(variants.color).map(color => (
              <tr key={color}>
                <td>{color}</td>
                {
                  Object.keys(variants.variant).map(variant => (
                    <td key={variant}>
                      <Button variant={variant} color={color} className='capitalize'>
                        {color}
                      </Button>
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
