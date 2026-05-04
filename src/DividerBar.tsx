import React from "react";
export function DividerBar({children, dividerObject}: {children: React.ReactNode, dividerObject: React.ReactNode}) {
    return <>{
        React.Children.toArray(children).map((child: React.ReactNode, index: number) => (
            <React.Fragment key={index}>
                {index > 0 && dividerObject}
                {child}
            </React.Fragment>
        ))
    }</>;
}