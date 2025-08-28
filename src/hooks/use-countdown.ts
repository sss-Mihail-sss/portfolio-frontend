'use client';

import { useCallback, useEffect, useState } from 'react';

type Props = {
  countStart: number;
  countStop?: number;
};

export const useCountdown = ({ countStart, countStop = 0 }: Props) => {
  const [count, setCount] = useState(countStart ?? 0);

  const countDown = useCallback(() => {
    if (countStart === countStop) {
      return;
    }

    setCount((prevCount) => prevCount - 1);
  }, [countStart, countStop]);

  const resetCountdown = useCallback(() => {
    setCount(countStart);
  }, [countStart]);

  useEffect(() => {
    const interval = setInterval(() => {
      countDown();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countDown]);

  return {
    count,
    resetCountdown,
  };
};
