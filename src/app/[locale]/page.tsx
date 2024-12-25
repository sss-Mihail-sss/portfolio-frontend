import {ChevronsRight} from 'lucide-react';

import { Button, buttonVariants } from '@/components/dnd/ui/button';

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
            Object.keys(variants.size).map(size => (
              <tr key={size}>
                <td>{size}</td>
                {
                  Object.keys(variants.variant).map(variant => (
                    <td key={variant}>
                      <Button variant={variant} size={size}>
                        {
                          size === 'icon' ? (
                            <ChevronsRight/>
                          ) : (
                            variant
                          )
                        }
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
