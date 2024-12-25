import { JSX } from 'react';

import { Button, ButtonProps } from '@/components/dnd/ui/button';
import { Container, ContainerProps } from '@/components/dnd/ui/container';

type Component = {
  slug: string;
  title: string;
}

type ContainerComponent = Component & {
  component: (props: ContainerProps) => JSX.Element;
  props?: ContainerProps;
}

type ButtonComponent = Component & {
  component: (props: ButtonProps) => JSX.Element;
  props?: ButtonProps;
}

type Components = (ContainerComponent | ButtonComponent)[]

export const components: Components = [
  {
    slug: 'container',
    component: Container,
    title: 'Container',
    props: {
      className: 'outline p-4',
    },
  },
  {
    slug: 'button',
    component: Button,
    title: 'Button',
  },
];
