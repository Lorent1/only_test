import React, {useRef, useState} from "react"
import "../styles/mainPage.scss"
import {Navigation} from "../components/Navigation";
import {angleBetweenDots, defaultTimeOfRotation, historicDates} from "../constants/historicDates";
import {Slider} from "../components/Slider";
import gsap from "gsap";
import {DateRange} from "../components/DateRange";
import {useDateRange} from "../hooks/useDateRange";
import {useSlider} from "../hooks/useSlider";

export const MainPage = () => {
    const [curEvent, setCurEvent] = useState<number>(0);

    const [angle, setAngle] = React.useState<number>(angleBetweenDots);
    const [timeOfRotation, setTimeOfRotation] = React.useState<number>(defaultTimeOfRotation);

    const dateRangeData = useDateRange(timeOfRotation);
    const sliderData = useSlider(setCurEvent);

    const loadCurrent = (idx: number) => {
        dateRangeData.animateDatesRange(idx)

        const angleOfRotation = angleBetweenDots - idx * angleBetweenDots;
        setTimeOfRotation(Math.abs(curEvent - idx) * defaultTimeOfRotation);

        const timer = setTimeout(() => {
            setAngle(angleOfRotation);
            clearTimeout(timer);
        }, 200);

        sliderData.sliderFadeIt(idx);
    }

    return <main className="main">
        <section className="historic-dates">
            <h1 className="historic-dates__title">Исторические даты</h1>
            <DateRange dateRangeData={dateRangeData} />
            <Navigation curEvent={curEvent} setCurEvent={setCurEvent} loadCurrent={loadCurrent}/>
            <Slider curEvent={curEvent} sliderData={sliderData}/>
        </section>
    </main>
}