'use client';

import { useState } from 'react';

import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import type { DragEndEvent } from '@dnd-kit/core/dist/types';
import { v4 } from 'uuid';

import { Draggable } from '@/components/dnd/draggable';
import { Button } from '@/ui/button';
import { Droppable } from '@/components/dnd/droppable';
import { components } from '@/lib/dnd/components-list';

type Block = {
  id: UniqueIdentifier;
  slug: string;
  props: {
    className?: string;
    [key: string]: string | number | undefined;
  }
  items: Block[];
}

const Builder = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function addItemToBlock(blocks: Block[], blockId: UniqueIdentifier, newItem: Block): Block[] {
    let found = false;

    const updatedBlocks = blocks.map(block => {
      if (block.id === blockId) {
        found = true;

        return {
          ...block,
          items: [...block.items, newItem],
        };
      }

      if (block.items.length > 0) {
        return {
          ...block,
          items: addItemToBlock(block.items, blockId, newItem),
        };
      }

      return block;
    });

    if (!found) {
      updatedBlocks.push(newItem);
    }

    return updatedBlocks;
  }

  function onDragEnd(event: DragEndEvent) {
    const { over, active } = event;
    const id = v4();

    if (!over || !active.data.current?.slug) {
      return;
    }

    const newItem: Block = {
      id,
      slug: active.data.current.slug,
      props: active.data.current?.props,
      items: [],
    };

    setBlocks(prev => addItemToBlock(prev, active.id, newItem));
  }

  return (
    <DndContext
      onDragEnd={onDragEnd}
      id="builder"
      sensors={sensors}
      collisionDetection={closestCenter}
    >
      <div className="flex flex-col gap-2 p-4 w-72 border-r">
        {
          components.map((component, index) => {
            const Component = component.component;

            return (
              <Draggable
                key={index}
                id={v4()}
                data={{
                  slug: component.slug,
                  props: component.props,
                }}
              >
                <Component {...component.props} />
              </Draggable>
            );
          })
        }
      </div>

      <Droppable className="flex-1" id="preview">
        {
          blocks.map(block => (
            <Button key={block.id} {...block.props} />
          ))
        }
      </Droppable>
    </DndContext>
  );
};

export { Builder };
