import { LayoutPanelLeft, Type } from 'lucide-react';

import { Builder } from './components/builder';
import { Button } from '@/ui/button';

export default function BuilderPage() {
  return (
    <div className="flex flex-col grow h-screen overflow-hidden">
      <div className="bg-background border-b flex items-center justify-between py-2">
        <div className="flex-1 flex gap-2">
          <Button size="icon" variant="ghost">
            <LayoutPanelLeft className="size-4.5" />
          </Button>
          <Button size="icon" variant="ghost">
            <Type className="size-4.5" />
          </Button>
        </div>

        <div>
          untiled
        </div>

        <div className="flex-1 flex justify-end gap-2">
          <Button>
            Publish
          </Button>
          <Button variant="outline" color="info">
            Save
          </Button>
        </div>
      </div>

      <Builder />
    </div>
  );
}
