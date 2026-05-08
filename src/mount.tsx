import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.js";


const body = document.querySelector("body");
if (!body) throw new Error("body does not exist");
const root = createRoot(body);
root.render(
    <>
    {!import.meta.env.PROD ? <StrictMode>
        <App/>
    </StrictMode> : <App/>}</>
)