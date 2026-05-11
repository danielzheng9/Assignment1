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
        <img className="behaveImage" src="https://stl.tech/wp-content/uploads/2022/05/shutterstock_561553240.jpg" alt="A cable with an opening cutout and 4 twisted wires exiting from the opening. This is a UTP cable." width="350px" height="233px" />
        </div>
        <h2>Copper Wires</h2>
        <div className="flexSide">
        <div className="flexNormal">
        <p>
            A copper wire is a thin thread made of copper that allows information to pass through it by converting data into elecetric signals that are transmitted as encoded sequences of voltage pulses throughout the conductor to communicate to another electrical component. It is a highly durable and flexible material.
        </p>
        <p>
            Copper wires are made of copper. Copper is a soft reddish metal that is recyclable, and one of the first metals used by humans. Copper corrodes through an electrochemical oxidation process when exposed to oxygen or moisture — forming a product appears green in appearance. Copper does not rust; it forms a protective film on the surface which gradually thickens until it forms copper carbonate. This material is called patina, serves as a protection layer that preserves the unspoiled copper inside.
        </p>
        <p>
            Copper wires are used heavily because copper is an exceptionally efficient conductor, and a lot more affordable than silver (though aluminium is cheaper). Copper has very low resistivity, meaning it demonstrates little resistance to the flow of electrical current.
        </p>
        <p>
            When other metals corrode, they form a highly resistant coating. Copper's natural oxidation layer is less resisting to conductivity.
        </p>
        <p>
            In aviation, copper wires aren't used because they are dense and heavy. They might use lighter materials — for instance, power lines use aluminium instead. Copper wires can pick up electromagnetic interference that can corrupt data signals. Without boosters, copper loses signal strength significantly faster than fiber optic cables. Because of this, copper wires are commonly used in home wiring and electronics — while aluminium is used in long-distance telecommunications.
        </p>
        </div>
        <img className="behaveImage" src="https://image.made-in-china.com/202f0j00mPwUtQiaOoqp/PVC-Insulated-Copper-for-Building-Wire.webp" alt="Copper wires shielded by plastic"/>
        </div>
        <h2>Coaxial Cable</h2>
        <p>A coaxial cable is a reliable cable that communicates high frequency radio signals across long distances. It consists of a protective plastic layer, a braided metal conductor that holds an insulator and a copper wire inside the insulator</p>
        <p>It's designed for minimal signal loss and interference. ISPs commonly use this cable, it is used for connecting satellite dishes, radio transmission, CCTV camera systems, telecom, broadcast industry.</p>
        <p>
            The data is transmitted using an alternating current through the central copper core.
        </p>
        <img className="behaveImage" src="https://rasantekaudio.com/wp-content/uploads/2024/11/Coaxial-Cable-Construction.webp" alt="A coaxial cable's components being dissected with an opening in the front of the cable, a braided copper shield, a foil shield inside the copper shield, a dielectric and center conductor."/>
        <h2>
            Fibre Optic Cables
        </h2>
        <p>
            Fibre optic transmits information via light through thin glass or plastic strands. It prevents signal loss and electromagnetic interference with its internal reflection properties and because it is transmitting with light
        </p>
        <p>
            These are designed for high-<NavLink to="https://en.wikipedia.org/wiki/Speed">speed</NavLink>, high-<NavLink to="/definitions/whatisnetworkbandwidth">bandwidth</NavLink>
        </p>
        <p>
            Single mode fibre optic is designed to carry a single ray of light through a narrow core. It is typically 10 microns in diameter, it eliminates modal dispersion — a phenomenon where order is not guarantueed, and at long distances can significantly influence the result because of different light paths travelling at different speeds. This enables reliable transmission of data across large distances like 140km.
        </p>
        <p>
            Multi mode fibre optic is designed to carry multiple rays of light in multiple wires. This can be unreliable across long distances — the more distance, the more time is given for the light to diverge more at various speeds. They're more commonly used in small, local areas where divergence isn't a concern due to the short distance.
        </p>
        <div className="flexSide">
            <img className="behaveImage" src="https://cdn.britannica.com/18/85418-004-BDAE4770/Light-ray-fibre.jpg" alt="An open fibre optic wire."/>
            <img className="behaveImage" src="https://images.ctfassets.net/aoyx73g9h2pg/2akZ34C0SwKh3lRZg3u0M5/bbdbf30bbe3d7f6939a78d50df925a28/Single-Mode-vs-Multimode-Fiber-Diagram.jpg" alt="Single mode vs multi mode fibre optic."/>
        </div>
        <h2>Wi-Fi</h2>
        <p>
            Wi-Fi is the family of network protocols from the IEEE 802.11
            It is the set of standards that defines the physical layer of the network and implements WLAN protocols enabling wireless communication
        </p>
        <p>
            Wi-Fi uses radio waves to transmit data between devices, operating like a two-way radio communication. Wi-Fi operates on 2.4GHz, 5GHz, or more recently 6GHz (Wi-Fi 6E or Wi-Fi 7). It uses Carrier Sense Multiple Access with Collision Avoidance to manage shared airwaves, ensuring devices can communicate without data collision.
        </p>
        <p>
            Carrier Sense Multiple Access with Collision Avoidance works by waiting a random amount of time before trying to send data again. It also uses Request to Send/Clear to Send, a handshake mechanism adopted in serial communication, and wireless data transmission to avoid collisions. It ensures transmitter only sends data when the receiver is ready. If the channel is free, the device transmits the entire frame of data. After receiving, recipient sends an acknowledgement. If the sender does not find an ACK after a while, it assumes a collision occurred and re transmits.
        </p>
        <h2>Cellular Network</h2>
        <p>
            A cellular network is a wireless, radio network distributed over land areas known as cells. Each cell contains a fixed location transceiver called a base station. The role of is to ensure radio coverage across large geographic areas. The base transceiver station allows nearby celluar devices to communicate with mobile devices. It routes calls to the base center controller. Cellular networks are distributed over small geographic areas called cells to manage limited radio frequencies by reusing them, and allow for high user density. The cellular network works with mobile devices to allow them to communicate via radio waves, transitioning seamlessly between cells for uninterrupted coverage. An average cell tower can reach up to 72 kilometers away, but the coverage is heavily dependent on nearby obstructions like buildings, wind, tree cover, weather. The cells in cellular network are hexagonal areas of land served by a trasceiver who can transmit and receive signals.
        </p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTZG5o1-OAFiMgwNrlEgECZD4npSRlgB7mA&s" alt="A cellular network tower"/>
        <h2>Satellites</h2>
        <p>A satellite is any object that orbits a celestial body.</p>
        <p>The moon and sun is a natural satellite, and it is not limited to just technology.</p>
        <p>Since humans have arrived on Earth, we have deployed various variations of technological satellites.</p>
        <p>In technology, satellites are used for systems that wouldn't work on Earth as it would on the air. It allows for an unobstructed view of the Earth due to its high altitude, constant orbiting around the Earth with no obstructions—allowing for things like communication and the internet, Earth observation (weather, polar ice melting, volcanoes, ...)</p>
        <p>A widely used satellite type involved in position calculation is Global Positioning System.</p>
        <p>A Global Positioning System satellite is a United States owned constellation of 31 satellites at an altitude 20,200 kilometers in the air. These satellites, operated by the United States Space Force, were created in February 22, 1978 to originally provide highly accurate 3D positioning data for military operations.</p>
        <p>
            In 1983, Korean Air Lines Flight 007 unintentionally steered into Soviet Union airspace and was shot down. Two weeks later, Ronald Reagan (40th United States president from 1981-1989) publicly announced GPS would become available for ordinary civillian use to prevent tragedies in the future. Later in 2000, Bill Clinton (42nd United States President from 1993-2001) on his last two years of being president signed an order to disable the GPS system's inaccuracy.
            The inaccuracy was imposed to degrade GPS signals used by civilians to limit accuracy to around 100 meters. This practice was supposedly to protect national security by introducing errors into satellite data.
            Bill Clinton disabled the inaccuracy because the United States military had developed new ways to protect national security without imposing limits on GPS accuracy. Instead, the United States military only jammed the signals in a specific war zone or region while allowing the rest of the world to use full accuracy GPS. Bill Clinton realised the global benefits of accurate GPS outweighed the risks of leaving the signal inaccurate and threatening national security—as they could just jam the signals in a specific area of conflict.
            Other companies had already bypassed this inaccuracy by developing Differential GPS—it would be useless anyway to keep the inaccuracy on.
            The decision was also influenced by the desire to unleash massive economic growth—it allows different industries to utilise this system with high accuracy, with the potential for faster efficiency and in turn: More money. Money.
            If it was enabled, businesses could track individual shipping containers and vehicles, instead of the GPS being inaccurate and tracking around it.
            This could enable efficiency as well by allowing delivery companies to avoid unnecessary driving routes because of the inaccuracy—saving fuel and fueling the economy instead with that saved fuel.
        </p>
        <p>
            Now, how does a GPS satellite work?
            Fundamentally, the GPS satellite includes an ultra-accurate
        </p>
    </>
}