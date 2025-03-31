'use client';

import { ReactNode } from 'react';
import { useHydrateAtoms } from 'jotai/utils';
import { WritableAtom } from 'jotai';

type Props = {
  children: ReactNode;
  atomValues?: Iterable<readonly [WritableAtom<unknown, [any], unknown>, unknown]>
}

export const AtomHydrator = ({ children, atomValues }: Props) => {
  useHydrateAtoms(new Map(atomValues));

  return children;
};
