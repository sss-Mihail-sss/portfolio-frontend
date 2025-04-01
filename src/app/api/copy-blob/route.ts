import { copy } from '@vercel/blob';

export async function PUT(request: Request) {
  const form = await request.formData();

  const from = form.get('from');
  const to = form.get('to');

  if (!from || !to) {
    return Response.json({
      error: true,
      message: 'Incorrect query params.',
    });
  }

  const blob = await copy(from as string, to as string, { access: 'public' });

  return Response.json(blob);
}
