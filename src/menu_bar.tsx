import React from "react";
import { NavLink } from "react-router-dom";
export interface MenuButtonProps extends React.ComponentProps<typeof NavLink> {
    buttonProps: React.ComponentProps<"button">,
    children?: React.ReactNode
}
export function MenuButton({buttonProps, children, ...props}: MenuButtonProps) {
    return <NavLink {...props}>
        <button className="menuButton" {...buttonProps}>
            {children}
        </button>
    </NavLink>
}
export function MenuBar() {
    return <header><p className="heading_logo standard">Connecting Me and You</p>
        <div className="navbar">
            <MenuButton buttonProps={{}} to="/arpanet">Hello</MenuButton>
        </div></header>
}
export function MenuNavLinkDisplay() {
    return <div className="navigation">
            {""}
        </div>
}