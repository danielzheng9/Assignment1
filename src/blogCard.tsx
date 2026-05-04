import { NavLink } from "react-router-dom";

export function BlogCard({children, to}: {children?: React.ReactNode, to: string}) {
    return <NavLink className="blogCard" to={to}>
            {children}
        </NavLink>
}
export function BlogTitle({children}: {children?: React.ReactNode}) {
    return <h2 className="borderlessTitle blogTitle">{children}</h2>;
}
export function MinuteToReadTime({mins}: {mins: number}) {
    return <p className="ghost">
        {`~${mins} minutes to read`}
    </p>
}
export function BlogDescription({children}: {children?: React.ReactNode}) {
    return <p>{children}</p>;
}