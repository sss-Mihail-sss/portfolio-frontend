'use client';

import { useState } from 'react';

import { DndContext, KeyboardSensor, PointerSensor, pointerWithin, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core/dist/types';
import { v4 } from 'uuid';

import { Draggable } from '@/components/dnd/draggable';
import { Droppable } from '@/components/dnd/droppable';
import { components } from '@/lib/dnd/components-list';
import { BuilderDragOverlay } from './drag-overlay';
import { cn } from '@/lib/utils';
import { SortableItem } from '@/components/dnd/sortable-item';

const Builder = () => {
  const [blocks, setBlocks] = useState<DndBlock[]>([]);
  const [currentBlock, setCurrentBlock] = useState<DndBlock>();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function addItemToBlock(blocks: DndBlock[], blockId: UniqueIdentifier, newItem: DndBlock): DndBlock[] {
    let found = false;

    const updatedBlocks = blocks.map(block => {
      if (block.id === blockId) {
        found = true;

        if (!block.items) {
          block.items = [];
        }

        return {
          ...block,
          items: [...block.items, newItem],
        };
      }

      if (block.items && block.items.length > 0) {
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

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;

    if (!active.data.current || !currentBlock) {
      return;
    }

    setCurrentBlock({
      id: active.id,
      slug: currentBlock.slug,
      props: currentBlock.props,
    });
  }

  function handleDragEnd(event: DragEndEvent) {
    const { over, active } = event;
    const id = v4();

    if (!over || !active.data.current) {
      return;
    }

    console.log(active);

    const newItem: DndBlock = {
      id,
      slug: active.data.current.slug,
      props: active.data.current.props,
      items: [],
    };

    if (over.id != 'preview' && active.id !== over.id) {
      setBlocks((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setBlocks(prev => addItemToBlock(prev, active.id, newItem));
    setCurrentBlock(undefined);
  }

  return (
    <DndContext
      id='builder'
      sensors={sensors}
      collisionDetection={pointerWithin}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className='flex flex-1'>
        <div className='flex flex-col gap-2 p-4 w-72 border-r'>
          {
            components.map((component, index) => {
              const Component = component.component;
              const { className, ...props } = component?.props || {};

              return (
                <Draggable
                  key={index}
                  id={v4()}
                  data={{
                    slug: component.slug,
                    props: component.props,
                  }}
                >
                  <Component {...props} className={cn('cursor-pointer', className)}>
                    {component.title}
                  </Component>
                </Draggable>
              );
            })
          }
        </div>

        <div className='flex-1 p-12'>
          <Droppable className='bg-background-soft border border-dashed h-full' id='preview'>
            <SortableContext items={blocks}>
              {
                blocks.map(block => {
                  const Component = components.find(c => c.slug === block.slug);
                  console.log(blocks);

                  if (!Component) {
                    return;
                  }

                  return (
                    <SortableItem key={block.id} id={block.id}>
                      <Component.component {...block.props} >
                        {block.id}
                      </Component.component>
                    </SortableItem>
                  );
                })
              }
            </SortableContext>
          </Droppable>
        </div>
      </div>

      <BuilderDragOverlay item={currentBlock} />
    </DndContext>
  );
};

export { Builder };
