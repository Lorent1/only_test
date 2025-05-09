import React from 'react';
import { ReturnUseDateRange } from '@/hooks/useDateRange';

import '../styles/components/dateRange.scss';

interface Props {
  dateRangeData: ReturnUseDateRange;
}

export const DateRange = ({ dateRangeData }: Props) => {
  const { startDate, endDate, startDateRef, endDateRef } = dateRangeData;

  return (
    <div className="range">
      <p className="range_start" ref={startDateRef}>
        {startDate}
      </p>
      <p className="range_end" ref={endDateRef}>
        {endDate}
      </p>
    </div>
  );
};
