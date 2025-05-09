import React, {useRef} from "react";

export interface ReturnUseSlider {
    sliderRef: React.RefObject<HTMLDivElement | null>;
    sliderFadeIt: (idx: number) => void;
}

export const useSlider = (setCurEvent: Function) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    function sliderFadeIt(idx: number) {
        sliderRef.current?.classList.remove("slider_show");

        const timer = setTimeout(() => {
            setCurEvent(idx);
            clearTimeout(timer);
        }, 300);
    }

    return {sliderRef, sliderFadeIt}
}