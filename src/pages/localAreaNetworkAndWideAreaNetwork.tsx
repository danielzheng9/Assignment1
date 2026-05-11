import { NavLink } from "react-router-dom";

export function LocalAreaNetworkAndWideAreaNetwork() {
    return <>
        <h1>LAN and WAN</h1>
        <strong>LAN</strong>
        <p>A Local Area Network is a network confined to a small area, usually within a building. </p>
        <p>Most Local Area Networks connect to the internet at a central point, a <NavLink to="/definitions/hardware">router</NavLink>.</p>
        <p>Local Area Networks use <NavLink to="/definitions/wired_transmission">Ethernet</NavLink>, Wi-Fi to connect devices within the network.</p>
        <p>Not all Local Area Networks connect to the Internet—Local Area Networks actually predate the Internet. The first Local Area Networks were actually used by businesses in 1970.</p>
        <strong>WAN</strong>
        <p>
            A Wide Area Network is a network composed of multiple Local Area Networks.
        </p>
    </>;
}