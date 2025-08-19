'use client';

// biome-ignore lint/suspicious/noShadowRestrictedNames: Error from next/error
import Error from 'next/error';

export default function GlobalNotFoundPage() {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
