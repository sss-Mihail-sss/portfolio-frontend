import { DragOverlay } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';

import { components } from '@/lib/dnd/components-list';

type Props = {
  item?: DndBlock
}

const BuilderDragOverlay = ({ item }: Props) => {
  if (!item) {
    return;
  }

  const component = components.find(c => c.slug === item.slug);

  if (!component) {
    return;
  }

  const Component = component.component;

  return (
    <DragOverlay
      modifiers={[restrictToWindowEdges]}
      dropAnimation={{
        duration: 200,
        easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)',
      }}
      className="cursor-move z-10"
    >
      <Component key={item.id} {...item.props} >
        {component.title}
      </Component>
    </DragOverlay>
  );
};

export { BuilderDragOverlay };
