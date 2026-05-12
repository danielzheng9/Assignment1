export function Topology() {
    return <>
        <h1>Topology</h1>
        <p>
            Topologies are often represented as a graph. Network topologies describe the arrangement of networks and the relative location of traffic flows. It defines the arrangment of device nodes and connections in a network, determining the flow of data. It defines the way each node is joined, either in a hexagon, a mesh or something else.
        </p>
        <img className="behaveImage" src="https://media.licdn.com/dms/image/v2/D5612AQFP7npXdC-q6w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691158913489?e=2147483647&v=beta&t=yXtYmLR6NG9ZQ9vWXM1lscz5o-EU4Vadrc4zs7fZRX4" alt="Different types of topology" width="600px" height="337px"/>
        <p>
            Topology can be physical or logical. Physical toplogy describes the real world layout of devices, for example: If the nodes are joined in a V shape to maximise efficiency, or spread out in a circle. In logical topology, it defines the way the graph is structured to provide clarity. It can display different info about each connection.
        </p>
        <h2>Bus Topology</h2>
        <p>A bus topology is where multiple devices connect to a single, central cable. The two words are derived from it looking like the cable is a bus carrying multiple devices.</p>
        <p>
            Bus topology is used for its easy installation and cheapness. It requires minimal cabling, minimises complex wiring because of the single cable used compared to tangled messes in small workspaces.
        </p>
        <p>
            It is used in industrial automation, HVAC (heating, ventilation, and air cooling)
        </p>
        <h2>Ring Topology</h2>
        <p>Ring topology is where each device connects to two others, forming a closed circle.</p>
        <p>
            It is used to prevent signal loss in large networks because there are many repeaters.
            Data flows from one node to another diretly until the destination is reached.
        </p>
        <p>
            A single node failure or shut down can distrupt the entire network because each node is codependent on each other to reach the destination.
        </p>
        <h2>
            Star Topology
        </h2>
        <p>
            Star topology is a network configuration where every device connects to a central node. This switch acts as the main server that manages all traffic, unlike Ring Topology—if one node fails or shuts down, the rest of the network is completely unaffected. It's the star, after all.
            All data transfers go through the central node, and no device can communicate with each other without going through the central node.
        </p>
        <h2>Mesh Topology</h2>
        <p>
            Mesh topology is a network configuration where any device can communicate with each other, allowing data to take many paths. This topology allows for high reliability from many redundancy paths, and the idea that any node can connect with each other.
            If a device fails, data can be routed through alternative paths—ensuring minimal downtime.
            This topology is used in critical areas like data centers and military communication.
        </p>
        <p>
            Not all nodes have to be connected to each other.
            Some nodes can be connected to everyone else, while others are connected to less. This reduces the cost because FULL mesh networks (where every node is connected to every other node, ensuring 100% uptime) will require lots of cabling and effort.
        </p>
        <img className="behaveImage" src="https://creately.com/static/assets/guides/mesh-topology/mesh-network-topology.svg" alt="Five computers with lines drawn between each other, one computer has a line to every other computer. This is mesh topology." width="500px"/>
        <h2>
            Hybrid Topology
        </h2>
        <p>
            Hybrid topology mixes different types of topologies. A hybrid network might include a star, and a bus structure for a specific application.
        </p>
        <img className="behaveImage" src="https://media.geeksforgeeks.org/wp-content/uploads/20220616225313/hybrid1.jpg" alt="Hybrid topology graph"/>
        <h2>
            Navigation Map
        </h2>
        <p>
            A navigation map in computing applications defines a visual representation of network components and connections. It highlights how nodes connect, and as Navigation in the name suggests—it describes the navigation between nodes—the routes.
            It allows IT technicians to easily get a glance of what the network looks like, and maintain infrastructures. It can help with identifying bottlenecks, fixing weird topology, adding redundancy for reliability, etc. 
        </p>
    </>
}