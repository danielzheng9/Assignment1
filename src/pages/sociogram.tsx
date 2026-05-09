import { NavLink } from "react-router-dom";

export function Sociogram() {
    return <>
        <h1>What is a Sociogram?</h1>
        <p>A sociogram is a graph displaying the links between different social entities or people.</p>
        <p>A sociogram might contain different entities on a graph with various lines between each other to highlight the connections within another.</p>
        <p>A sociogram might have different categories for entities, a key map, and are generally complex webs of social graphs.</p>
        <NavLink to="https://www.researchgate.net/figure/Example-of-a-sociogram-of-a-clinicians-ideal-network-Original-diagram-created-with-Node_fig1_51521333">Image Source: ResearchGate</NavLink>
        <img className="behaveImage" src="https://raw.githubusercontent.com/DOGNET-SUPERB-TECHNOLOGIES/cdn/main/sociogramExampleFromResearchGate.webp" alt="Example of a sociogram of a clinican's ideal network. Original diagram created with Node XL."/>
        <img className="behaveImage" src="https://www.6seconds.org/wp-content/uploads/2017/07/Sociogram1.png" alt=""/>
    </>
}