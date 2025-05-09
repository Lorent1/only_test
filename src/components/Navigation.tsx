import React, {useState} from "react";
import "../styles/navigation.scss"
import {eventsNum} from "../constants/historicDates";

interface Props {
    curEvent: number;
    setCurEvent: React.Dispatch<React.SetStateAction<number>>
    loadCurrent: Function
}

export const Navigation = ({curEvent, loadCurrent}: Props) => {
    const [curNum, setCurNum] = useState(curEvent);

    const loadNextEvent = () => {
        setCurNum(curNum + 1)
        loadCurrent(curNum + 1)
    }

    const loadPrevEvent = () => {
        setCurNum(curNum - 1)
        loadCurrent(curNum - 1)
    }

    return <div className="navigation">
        <p className="navigation__info">{`0${curNum + 1}/0${eventsNum}`}</p>
        <div className="navigation__buttons">
            <button className="navigation__button navigation__button__prev" disabled={curNum === 0} onClick={loadPrevEvent}></button>
            <button className="navigation__button navigation__button__next" disabled={curNum === eventsNum - 1} onClick={loadNextEvent}></button>
        </div>
    </div>
}