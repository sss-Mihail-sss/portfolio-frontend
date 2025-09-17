'use client';

import { useEffect } from 'react';

import { Button } from '@/ui/button';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
  useEffect(() => {
    // TODO: Log the error to an error reporting service
    // biome-ignore lint/suspicious/noConsole: Need to log the error
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
