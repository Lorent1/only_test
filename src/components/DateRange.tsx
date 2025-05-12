import React from 'react';
import { ReturnUseDateRange } from '@/hooks/useDateRange';

import '../styles/components/dateRange.scss';

interface Props {
  dateRangeData: ReturnUseDateRange;
}

export const DateRange = ({ dateRangeData }: Props) => {
  const { startValueRef, endValueRef, startDateRef, endDateRef } = dateRangeData;

  return (
    <div className="range">
      <p className="range_start" ref={startDateRef}>
        {startValueRef.current.value}
      </p>
      <p className="range_end" ref={endDateRef}>
        {endValueRef.current.value}
      </p>
    </div>
  );
};
