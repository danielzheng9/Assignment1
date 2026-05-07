import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export function Scroller() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [useLocation().pathname])
    return <></>;
}