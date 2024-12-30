import { Button, buttonVariants } from '@/ui/button';

type Props = {
  params: {
    locale: string;
  }
}

export default function HomePage({}: Props) {
  const variants = buttonVariants.variants;

  return (
    <div className="container flex flex-col items-center p-12 gap-4">
      <div className="bg-card w-fit rounded">
        <table className="text-sm border-collapse table-auto w-full text-secondary-foreground [&_td]:py-3 [&_td]:px-8">
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
                        <Button variant={variant} color={color} className="capitalize">
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
    </div>
  );
}
