import React from "react";
import { NavLink } from "react-router-dom";
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
            <MenuButton buttonProps={{}} to="/arpanet">Hello</MenuButton>
        </div></header>
}
export function MenuNavLinkDisplay() {
    return <div className="navigation">
            {""}
        </div>
}