import { NavLink } from "react-router-dom";

export function NotFound() {
    return <main>
        <div>
            <h1 className="notFound"><i>Feeling peaceful...</i></h1>
            <p className="ghost">404 — There's nothing here.</p>
        </div>
        <button onClick={() => {
            history.back();
        }} className={"noLink standardButton"}>
            Go Back
        </button>
    </main>
}