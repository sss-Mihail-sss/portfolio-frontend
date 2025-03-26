import { useState } from 'react';

import { usePathname, useRouter } from '@/i18n/navigation';

type Stage = 'leave' | 'enter' | 'none'

function Transition() {
  const router = useRouter();
  const pathname = usePathname();

  const [stage, setStage] = useState<Stage>('none');
}
