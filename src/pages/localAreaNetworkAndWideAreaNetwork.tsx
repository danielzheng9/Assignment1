import { NavLink } from "react-router-dom";

export function LocalAreaNetworkAndWideAreaNetwork() {
    return <>
        <h1>LAN and WAN</h1>
        <strong>LAN</strong>
        <p>A Local Area Network is a network confined to a small area, usually within a building. </p>
        <p>Most Local Area Networks connect to the internet at a central point, a <NavLink to="/definitions/hardware">router</NavLink>.</p>
        <p>Local Area Networks use <NavLink to="/definitions/wired_transmission">Ethernet</NavLink>, Wi-Fi to connect devices within the network.</p>
        <p>Not all Local Area Networks connect to the Internet—Local Area Networks actually predate the Internet. The first Local Area Networks were actually used by businesses in 1970.</p>
        <p>
            Local Area Networks are used for areas like houses, and small offices. Generally, they are just used in small areas.
        </p>
        <strong>WAN</strong>
        <p>
            A Wide Area Network is a network composed of multiple Local Area Networks.
        </p>
        <p>
            Wide Area Networks are used to connect computers across intercontinental locations. They are needed for large entities like businesses to transmit data across the globe—acting as a unified system to link an office to a central headquarter.
            Wide Area Networks are used to connect computers across intercontinental locations. They are needed for large entities like businesses to transmit data across the globe—acting as a unified system to link an office to another, or to a central headquarter.
        </p>
        <img className="behaveImage" src="https://www.lifewire.com/thmb/XrIb-evP1ov7VMLCLnp0IILHk4E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lans-wans-and-other-area-networks-817376-6e07f1a4121a4e13ac43660ea41ef9b9.png" alt="Local Area Network and Wide Area Network" width="500px"/>
    </>;
}