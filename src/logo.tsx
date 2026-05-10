import { NavLink, type NavLinkProps } from "react-router-dom"
import { useState, useEffect, useCallback, Component } from "react";
import { tagAppend, type ClassyName } from "./utils/tagAppend.js";
export function LogoFull({className,  ...props}: ClassyName & Partial<NavLinkProps>) {
    return <NavLink {...props} to="/" className={tagAppend("heading_logo standard noLink", className)}>
        <img className="main-logo" src="https://raw.githubusercontent.com/DOGNET-SUPERB-TECHNOLOGIES/cdn/main/dognetTechnologies.png" alt="The full text version of our website logo"/>
    </NavLink>
}
export function LogoIcon({className, ...props}: ClassyName & Partial<NavLinkProps>) {
    return <NavLink {...props} to="/" className={tagAppend("heading_logo standard noLink", className)}>
        <img className="main-logo" src="https://raw.githubusercontent.com/DOGNET-SUPERB-TECHNOLOGIES/cdn/main/favicon.png" alt="The icon version of our website logo"/>
    </NavLink>
}
export function Logo() {
    return <>
        <LogoIcon className="toggle_small_screen"/>
        <LogoFull className="toggle_desktop"/>
    </>;
}