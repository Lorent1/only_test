import React from 'react';
import '../styles/components/navigation.scss';
import { eventsNum } from '@/constants/historicDates';

interface Props {
  curEvent: number;
  loadCurrent: (_idx: number) => void;
}

const Navigation = ({ curEvent, loadCurrent }: Props) => {
  const loadNextEvent = () => {
    loadCurrent(curEvent + 1);
  };

  const loadPrevEvent = () => {
    loadCurrent(curEvent - 1);
  };

  return (
    <div className="navigation">
      <p className="navigation__info">{`0${curEvent + 1}/0${eventsNum}`}</p>
      <div className="navigation__buttons">
        <button
          className="navigation__button navigation__button__prev"
          disabled={curEvent === 0}
          onClick={loadPrevEvent}
        ></button>
        <button
          className="navigation__button navigation__button__next"
          disabled={curEvent === eventsNum - 1}
          onClick={loadNextEvent}
        ></button>
      </div>
    </div>
  );
};

export default Navigation;
