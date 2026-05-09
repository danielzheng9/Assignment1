import { NavLink } from "react-router-dom"
import { useState, useEffect, useCallback, Component } from "react";
export function LogoFull({...props}: Partial<React.ComponentProps<typeof NavLink>>) {
    return <NavLink {...props} to="/" className="heading_logo standard noLink">
        <img className="main-logo" 
        src="https://raw.githubusercontent.com/DOGNET-SUPERB-TECHNOLOGIES/cdn/main/dognetTechnologies.png"/>
    </NavLink>
}
export function LogoIcon({...props}: Partial<React.ComponentProps<typeof NavLink>>) {
    return <NavLink {...props} to="/" className="heading_logo standard noLink">
        <img className="main-logo" 
        src="https://raw.githubusercontent.com/DOGNET-SUPERB-TECHNOLOGIES/cdn/main/favicon.png"/>
    </NavLink>
}
export function Logo() {
    return <>
        <LogoIcon className="toggle_small_screen"/>
        <LogoFull className="toggle_desktop"/>
    </>;
}