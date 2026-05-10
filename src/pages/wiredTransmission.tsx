import { NavLink } from "react-router-dom";

export function WiredTransmission() {
    return <>
        <h1>Wired Transmission</h1>
        <p>Wired transmission uses forms of wired communication to transmit data between devices</p>
        <p>It is a form of communication separate from Wireless Transmission.</p>
        <h2>Ethernet Cable & UTP</h2>
        <p>
            An ethernet cable is a physical cable that can transmit data to networks
        </p>
        <p>
            UTP is a form of ethernet cable that has four twisted copper wires without an outer casing to protect it
        </p>
        <p>
            Ethernet cables are used to physically connect devices (such as computers, laptops, smart TVs, gaming consoles, mini PCs, Network Attached Storage Devices, desktop towers, workstation laptops, single-board computers, streaming boxes, AV receivers, Network Video Recorders, smart hubs, smart fridges, network printers/scanners, security basestations and specific smart washing machines for example) to provide a stable, high speed wired connection for data transfer between computers, routers, switches, and devices in a <NavLink to="/definitions/hardware">LAN</NavLink>.
        </p>
        <p>An Unshielded Twisted Paircable is a type of copper cable used in networking to transmit data. UTP lacks metallic shielding, allowing a small diameter which in turn makes it more flexible, and easier to install.</p>
        <p>
            Twisting of wires increases the cable's immunity to electric noise. There are different categories for UTP that allow for various speeds. Cat5e supports Gigabit internet, and Cat6a supports 10 Gigabit internet.
        </p>
        <div className="flexSide">
        <img className="behaveImage" src="https://www.firewall.cx/images/stories/cabling-utp-categories.png" alt="A table listing categories of UTP"/>
        <img className="behaveImage" src="https://stl.tech/wp-content/uploads/2022/05/shutterstock_561553240.jpg" alt="A cable with an opening cutout and 4 twisted wires exiting from the opening. This is a UTP cable." width="700px" height="466px" />
        </div>
    </>
}