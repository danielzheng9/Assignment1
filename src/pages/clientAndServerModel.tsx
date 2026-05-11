export function ClientAndServerModel() {
    return <>
        <h1>Client and Server Model</h1>
        <p>
            The client and server model is a model where multiple clients communicate to a more powerful server. The clients display the data to the user, while the server provides them. The server acts as a source of truth for everyone, ensuring no one client can fake truth.
        </p>
        <p>
            This model is used extensively on the web—where the server provides the page data to the client, and the client renders them. The client and server can communicate with each other to reflect changes, and the client can request something after the server sends info.
        </p>
        <p>
            Client side means what your browser displays, the text, the images, the sounds.
        </p>
        <p>
            Server side means the data part—interacting with data, logging in with authentication.
        </p>
    </>
}