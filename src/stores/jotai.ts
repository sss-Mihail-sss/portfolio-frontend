import { atom } from 'jotai';

import { Job } from '@/types/job';

export const jobAtom = atom<Omit<Job, 'id'>>();