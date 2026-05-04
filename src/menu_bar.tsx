import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AppContext } from "./app.js";
import { resourceStringMap } from "./resourceStringMap.js";
export interface MenuButtonProps extends React.ComponentProps<typeof NavLink> {
    buttonProps: React.ComponentProps<"button">,
    children?: React.ReactNode
}
export function MenuButton({buttonProps, children, ...props}: MenuButtonProps) {
    return <NavLink className="menuButton noLink" {...props}>
        {children}
    </NavLink>
}
export function MenuBar() {
    return <header>
    <NavLink to="/home" className="heading_logo standard noLink">
        Connecting Me and You
    </NavLink>
        <div className="navbar">
            <MenuButton buttonProps={{}} to="/f">404 Not Found</MenuButton>
            <MenuButton buttonProps={{}} to="/blogs">Blogs</MenuButton>
        </div></header>
}
export function MenuNavLinkDisplay() {
    const appContext = useContext(AppContext);
    const location = useLocation();
    return <>{ resourceStringMap[location.pathname] ? <div className="navigation">
            {resourceStringMap[location.pathname] ?? "Unknown Page"}
        </div> : <></>}</>
}