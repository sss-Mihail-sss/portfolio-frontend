import { head } from '@vercel/blob';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const blobUrl = searchParams.get('url');

  if (!blobUrl) {
    return Response.json({
      error: true,
      message: 'URL not found.',
    });
  }

  const blobDetails = await head(blobUrl);
  return Response.json(blobDetails);
}
