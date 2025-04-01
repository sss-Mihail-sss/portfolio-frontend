import { list, ListBlobResultBlob, ListFoldedBlobResult } from '@vercel/blob';

export async function GET(request: Request) {
  let hasMore = true;
  let cursor;

  const blobs: ListBlobResultBlob[] = [];
  const folders: string[] = [];

  while (hasMore) {
    const listResult: ListFoldedBlobResult = await list({
      cursor,
      mode: 'folded',
      limit: 3,
    });
    hasMore = listResult.hasMore;
    cursor = listResult.cursor;

    if (listResult.blobs.length > 0) {
      blobs.push(...listResult.blobs);
    }

    if (listResult.folders.length > 0) {
      folders.push(...listResult.folders);
    }

    console.log(listResult.folders);
  }

  return Response.json({ blobs, folders });
}
