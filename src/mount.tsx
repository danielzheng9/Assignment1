import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.js";

const header = document.querySelector("body");
if (!header) throw new Error("header does not exist");
const root = createRoot(header);
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)
