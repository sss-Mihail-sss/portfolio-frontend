export default async function Page({ params }: PageProps<'/[locale]/jobs/category/[slug]'>) {
  const { slug } = await params;

  return (
    <div>
      <h1 className="text-2xl">{slug}</h1>
    </div>
  );
}
