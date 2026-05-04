import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "./react/jsx-runtime";
import { StrictMode } from "./react";
import { createRoot } from "./react-dom/client";
import { BrowserRouter, Routes, Route, NavLink, useLocation } from "./react-router-dom";
import { MenuBar } from "./menu_bar.js";
import { ArpanetPage } from "./arpanet.js";
const header = document.querySelector("body");
if (!header)
    throw new Error("header does not exist");
const root = createRoot(header);
window.alert("rendering");
root.render(_jsxs(StrictMode, { children: [_jsx("p", { children: "Hi" }), _jsxs(BrowserRouter, { children: [_jsx(MenuBar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(ArpanetPage, {}) }), _jsx(Route, { path: "/about", element: _jsx(_Fragment, {}) })] })] })] }));
//# sourceMappingURL=app.js.map