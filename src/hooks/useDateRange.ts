import {historicDates} from "../constants/historicDates";
import gsap from "gsap";
import React, {useRef} from "react";

export interface ReturnUseDateRange {
    animateDatesRange: (index: number) => void,
    startDateRef: React.RefObject<HTMLDivElement | null>,
    endDateRef: React.RefObject<HTMLDivElement | null>,
    startDate: number;
    endDate: number;
}

export const useDateRange = (timeOfRotation: number): ReturnUseDateRange => {
    const [startDate, setStartDate] = React.useState<number>(Number(historicDates[0].events[0].date));
    const [endDate, setEndDate] = React.useState<number>(Number(historicDates[0].events[historicDates.length - 1].date));

    const startDateRef  = useRef<HTMLDivElement>(null);
    const endDateRef  = useRef<HTMLDivElement>(null);

    const animateDatesRange = (index: number) => {
        const newStartDate = Number(historicDates[index].events[0].date);
        const startRange = newStartDate - startDate;
        const newEndDate = Number(historicDates[index].events[historicDates.length - 1].date);
        const endRange = newEndDate - endDate;
        const animationTime = (timeOfRotation + 300) / 1000;

        gsap.to(startDateRef.current, {
            duration: animationTime,
            textContent: `+=${startRange}`,
            roundProps: "textContent",
            ease: "none",
            onUpdate: () => setStartDate(newStartDate)
        });

        gsap.to(endDateRef.current, {
            duration: animationTime,
            textContent: `+=${endRange}`,
            roundProps: "textContent",
            ease: "none",
            onUpdate: () => setEndDate(newEndDate)
        });
    }

    return {animateDatesRange, startDateRef, endDateRef, startDate, endDate}
}