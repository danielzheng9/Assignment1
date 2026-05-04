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
    <NavLink to="/" className="heading_logo standard noLink">
        DOGNET TECHNOLOGIES
    </NavLink>
        <div className="navbar">
            <MenuButton buttonProps={{}} to="/f">404 Not Found</MenuButton>
            <MenuButton buttonProps={{}} to="/blogs">Blogs</MenuButton>
        </div></header>
}
export function MenuNavLinkDisplay() {
    const appContext = useContext(AppContext);
    const location = useLocation();
    const pathname = location.pathname.trim();
    const PathnameSplit = pathname.split("/").filter((path: string, index: number) => {
        if (path.length === 0) return undefined;
        return true;
    });
    if (PathnameSplit.length === 0) return <></>;
    // return <>{ resourceStringMap[location.pathname] ? <div className="navigation">
    //         {resourceStringMap[location.pathname] ?? "Unknown Page"}
    //     </div> : <></>}</>
    return <div className="navigation">{PathnameSplit.flatMap((thisPlace: string, index: number) => {
        const thisArray = [];
        if (index > 0) {
            thisArray.push(<p className="light" key={index * 2}>/</p>);
        }

        return [...thisArray, <NavLink key={index * 2 + 1} className="grey" to={PathnameSplit.slice(0, index + 1).join("/")}>{thisPlace.charAt(0).toUpperCase() + thisPlace.slice(1)}</NavLink>]
    })}</div>
}