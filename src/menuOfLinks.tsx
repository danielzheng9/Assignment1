import { StandardMenuButton } from "./menu_bar.js"
export function MenuOfLinks() {
    return <div className="toggle_small_screen menuOfLinks">
        <StandardMenuButton to="/timeline">Timeline</StandardMenuButton>
        <StandardMenuButton to="/featured_definitions">Featured Definitions</StandardMenuButton>
        <StandardMenuButton to="/definitions">Definitions</StandardMenuButton>
        <StandardMenuButton to="/signup">Signup</StandardMenuButton>
    </div>
}