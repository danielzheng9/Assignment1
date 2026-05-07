import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react";
export function Logo() {
    const [sourceIcon, setSourceIcon] = useState<string>("https://raw.githubusercontent.com/DOGNET-SUPERB-TECHNOLOGIES/cdn/main/dognetTechnologies.png");
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 600) {
                setSourceIcon("https://raw.githubusercontent.com/DOGNET-SUPERB-TECHNOLOGIES/cdn/main/favicon.png");
                return true;
            }
            setSourceIcon("https://raw.githubusercontent.com/DOGNET-SUPERB-TECHNOLOGIES/cdn/main/dognetTechnologies.png");
            return true;
        });
    }, [])
    return <NavLink to="/" className="heading_logo standard noLink">
                <img className="main-logo" 
                src={sourceIcon}/>
            </NavLink>
}