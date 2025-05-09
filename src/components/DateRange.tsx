import React, {useRef} from "react";
import {defaultTimeOfRotation, historicDates} from "../constants/historicDates";
import gsap from "gsap";
import {ReturnUseDateRange} from "../hooks/useDateRange";

interface Props{
    dateRangeData: ReturnUseDateRange;
}

export const DateRange = ({dateRangeData}: Props) => {
    const {startDate, endDate, startDateRef, endDateRef} = dateRangeData

    return <div className="historic-dates__date-range range">
        <p className='range_start' ref={startDateRef}>{startDate}</p>
        <p className='range_end' ref={endDateRef}>{endDate}</p>
    </div>
}