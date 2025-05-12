import { historicDates } from '@/constants/historicDates';
import React from 'react';

import '@/styles/components/controlButtons.scss';

interface Props {
  curEvent: number;
  loadCurrent: (_idx: number) => void;
}

const ControlButtons = ({ curEvent, loadCurrent }: Props) => {
  return (
    <div className="events__control-buttons">
      {historicDates.map((_, index) => {
        return (
          <button
            className={'events__button ' + (curEvent === index ? 'events__button_active' : '')}
            key={index}
            onClick={() => loadCurrent(index)}
          ></button>
        );
      })}
    </div>
  );
};

export default ControlButtons;
