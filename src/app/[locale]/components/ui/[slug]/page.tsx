type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>
}

export default async function SlugComponentPage({ params }: Props) {
  const { slug } = await params;

  return (
    <>
      {slug}
    </>
  );
}
