import React, { useRef, useState } from 'react';
import { angleBetweenDots, defaultTimeOfRotation } from '@/constants/historicDates';
import { Slider } from '@/components/Slider';
import { DateRange } from '@/components/DateRange';
import { useDateRange } from '@/hooks/useDateRange';
import { useSlider } from '@/hooks/useSlider';
import '../styles/pages/mainPage.scss';
import Navigation from '@/components/Navigation';
import Spinner from '@/components/Spinner';
import ControlButtons from '@/components/ControlButtons';

export const MainPage = () => {
  const [curEvent, setCurEvent] = useState<number>(0);

  const [angle, setAngle] = useState<number>(angleBetweenDots);
  const [timeOfRotation, setTimeOfRotation] = useState<number>(defaultTimeOfRotation);

  const dateRangeData = useDateRange(timeOfRotation);
  const sliderData = useSlider(setCurEvent);

  const spinnerRef = useRef<HTMLDivElement>(null);

  const loadCurrent = (idx: number) => {
    if (idx === curEvent) {
      return;
    }

    dateRangeData.animateDatesRange(idx);

    const angleOfRotation = angleBetweenDots - idx * angleBetweenDots;
    setTimeOfRotation(Math.abs(curEvent - idx) * defaultTimeOfRotation);

    const timer = setTimeout(() => {
      setAngle(angleOfRotation);
      clearTimeout(timer);
    }, 200);

    sliderData.sliderFadeIt(idx);
  };

  return (
    <main className="main">
      <section className="historic-dates">
        <h1 className="historic-dates__title">Исторические даты</h1>
        <DateRange dateRangeData={dateRangeData} />
        <Spinner
          curEvent={curEvent}
          loadCurrent={loadCurrent}
          angle={angle}
          spinnerRef={spinnerRef}
          timeOfRotation={timeOfRotation}
        />
        <Navigation curEvent={curEvent} loadCurrent={loadCurrent} />
        <Slider curEvent={curEvent} sliderData={sliderData} />
        <ControlButtons curEvent={curEvent} loadCurrent={loadCurrent} />
      </section>
    </main>
  );
};
