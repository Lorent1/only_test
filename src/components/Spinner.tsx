import React from 'react';
import { eventsNum, historicDates } from '@/constants/historicDates';

import '../styles/components/spinner.scss';

interface Props {
  loadCurrent: (_idx: number) => void;
  spinnerRef: React.RefObject<HTMLDivElement | null>;
  curEvent: number;
  angle: number;
  timeOfRotation: number;
}

const Spinner = ({ loadCurrent, curEvent, angle, spinnerRef, timeOfRotation }: Props) => {
  return (
    <div className="spinner">
      <div
        ref={spinnerRef}
        className="spinner__main-circle"
        style={
          {
            '--count': eventsNum,
            '--angle': angle + 'deg',
            '--time': timeOfRotation + 'ms',
            '--delay': timeOfRotation + 300 + 'ms',
          } as React.CSSProperties
        }
      >
        {historicDates.map((item, index) => {
          const { title } = item;
          const idx = index + 1;
          return (
            <div
              key={index}
              role="button"
              tabIndex={0}
              className={
                'spinner__shoulder ' + (curEvent === index ? 'spinner__shoulder_active' : '')
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  loadCurrent(index);
                }
              }}
              style={{ '--i': idx } as React.CSSProperties}
              onClick={() => loadCurrent(index)}
            >
              <div className="spinner__circle-area">
                <p className="spinner__circle">
                  {idx}
                  <span className="spinner__title">{title}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Spinner;
