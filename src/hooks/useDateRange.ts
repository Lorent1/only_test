import { historicDates } from '@/constants/historicDates';
import { gsap } from 'gsap';
import React, { useRef } from 'react';

export interface ReturnUseDateRange {
  animateDatesRange: (_idx: number) => void;
  startDateRef: React.RefObject<HTMLDivElement | null>;
  endDateRef: React.RefObject<HTMLDivElement | null>;
  startValueRef: React.RefObject<{ value: number }>;
  endValueRef: React.RefObject<{ value: number }>;
}

export const useDateRange = (timeOfRotation: number): ReturnUseDateRange => {
  const startDateRef = useRef<HTMLDivElement>(null);
  const endDateRef = useRef<HTMLDivElement>(null);

  const startValueRef = useRef({ value: Number(historicDates[0].events[0].date) });
  const endValueRef = useRef({
    value: Number(historicDates[0].events[historicDates.length - 1].date),
  });

  const animateDatesRange = (index: number) => {
    const newStartDate = Number(historicDates[index].events[0].date);
    const newEndDate = Number(historicDates[index].events[historicDates.length - 1].date);

    const animationTime = (timeOfRotation + 300) / 1000;

    gsap.to(startValueRef.current, {
      duration: animationTime,
      value: newStartDate,
      roundProps: 'value',
      ease: 'none',
      overwrite: 'auto',
      onUpdate: () => {
        if (startDateRef.current) {
          startDateRef.current.textContent = String(startValueRef.current.value);
        }
      },
    });

    gsap.to(endValueRef.current, {
      duration: animationTime,
      value: newEndDate,
      roundProps: 'value',
      ease: 'none',
      overwrite: 'auto',
      onUpdate: () => {
        if (endDateRef.current) {
          endDateRef.current.textContent = String(endValueRef.current.value);
        }
      },
    });
  };

  return { animateDatesRange, startDateRef, endDateRef, startValueRef, endValueRef };
};
