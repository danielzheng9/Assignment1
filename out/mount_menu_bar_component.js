import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
const header = document.querySelector("header");
if (!header)
    throw new Error("header does not exist");
const root = createRoot(header);
root.render(_jsx(StrictMode, {}));
//# sourceMappingURL=mount_menu_bar_component.js.map