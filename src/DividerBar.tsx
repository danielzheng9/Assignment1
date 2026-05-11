import React from "react";
export function DividerBar({children, dividerObject}: {children: React.ReactNode, dividerObject: React.ReactNode}) {
    return <>{ // <></> is a React Fragment
        React.Children.toArray(children).map((child: React.ReactNode, index: number) => (
            <React.Fragment key={index}>
                {index > 0 && dividerObject}
                {child}
            </React.Fragment> // Equivalent to <></>. Useful for wrapping multiple elements into one element through a React Fragment (non rendered abstract component) when you need to return something only from one value
        )) // This is just a React method that grabs the children of React.ReactNode (can be any element). Array.prototype.map() is a JavaScript function that loops over an array  and whatever is returned is added to a new array from the results. https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    }</>;
}