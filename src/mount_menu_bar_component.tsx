import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
const header = document.querySelector("header");
if (!header) throw new Error("header does not exist");
const root = createRoot(header);
root.render(
    <StrictMode>
    </StrictMode>
);