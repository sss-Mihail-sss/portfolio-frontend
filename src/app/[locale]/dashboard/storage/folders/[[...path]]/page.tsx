import { Locale } from 'next-intl';
import { FileIcon, FolderIcon } from 'lucide-react';

import { getObjects } from '@/actions/s3/object';
import { CreateFolder } from '@/components/form/s3/create-folder';
import { Link } from '@/ui/link';
import { getPathname } from '@/i18n/navigation';
import { Pathnames } from '@/i18n/routing';
import { UploadImage } from '@/components/form/s3/upload-image';

type Props = {
  params: Promise<{
    locale: Locale;
    path: string[] | undefined;
  }>
}

export default async function Page({ params }: Props) {
  const { path } = await params;
  const { folders, files } = await getObjects({
    path: path?.join('/'),
  });

  const href = getPathname({
    href: {
      pathname: '/dashboard/storage/folders/[[...path]]',
      params: {
        path: [
          ...(path ? path : []),
        ],
      },
    },
    locale: 'ro',
  });

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1>Folders</h1>

        <div className='flex gap-2'>
          <CreateFolder />
          <UploadImage />
        </div>
      </div>

      <div className='flex gap-1 flex-col mt-4'>
        {
          folders.map(folder => (
            <Link
              key={folder}
              // href={{
              //   pathname: '/dashboard/storage/folders/[[...path]]',
              //   params: {
              //     path: [
              //       ...(path ? path : []),
              //       folder,
              //     ],
              //   },
              // }}
              href={href as Pathnames}
              className='flex px-2 py-1 gap-2 items-center rounded hover:bg-gray-100/10'
            >
              <FolderIcon className='size-4' />
              {folder}
            </Link>
          ))
        }
        {
          files.map(file => (
            <div key={file} className='flex px-2 py-1 gap-2 items-center rounded hover:bg-gray-100/10'>
              <FileIcon className='size-4' />
              {file}
            </div>
          ))
        }
      </div>
    </div>
  );
}
