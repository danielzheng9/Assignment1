export function HyperTextTransferProtocol() {
    return <>
        <h1>Hyper Text Transfer Protocol</h1>
        <p>The Hypertext Transfer Protocol (HTTP) is a stateless protocol for data serialisation over network requests.</p>
        <p>It is frequently utilised to send info from a server to a browser, or vise versa. It can load any data type from the Multipurpose Internet Mail Extensions type — JSON, XML, PDF, ZIP, Binary Data, HTML, CSS, plaintext, JavaScript, PNG, JPEG, GIF, SVG, MPEG, WAV, MP4, WEBM, OGG, WOFF, TTF, AVIF, WEBP, HTTP, RFC822, STL Model, GLTF+JSON Model, VRML Model, CSV, MOV, and thousands more.</p>
        <p>
            A request includes methods: GET, POST, PUT, and DELETE. It includes a target URL or resource path, and a version of the HTTP protocol being used.
        </p>
        <p>
            A response contains a HTTP status code, HTTP response headers and maybe a HTTP body.
        </p>
        <p>
            A HTTP status code is a 3 digit code to indicate the status of the request—whether the resource has been successfully retrieved or something happened.
            Status codes can include 200 which means OK. 404 which means an error with retrieving the resource. 500 which means an internal server error. These HTTP status codes are defined and maintained by the Internet Engineering Task Force, and the World Wide Web Consortium through the Request for Comments documents. They exist at the IANA HTTP Status Code Registry. HTTP request prefixes include the following:
        </p>
        <ul>
            <li>1** Information</li>
            <li>2** Success</li>
            <li>3** Redirect</li>
            <li>4** Client Error</li>
            <li>5** Server Error</li>
        </ul>
        <p>** is place holder for any number from 0 to 99.</p>
        <p>If a HTTP request status code falls outside the 0-500 range, the error code will result in 416 Requested Range Not Satisfiable error code.</p>
        <p>A HTTP response header primarily includes a content type, a status, and other things. A HTTP response header conveys important information for the client to understand.</p>
        <p>
            Your client can send HTTP data to a server for it to process and send a request back.
        </p>
        <p>
            A GET method requests data from a specified resource.
        </p>
        <p>
            A POST method submits data to a specified resource.
        </p>
        <p>
            A PUT method replaces data from a target source with the requested content.
        </p>
        <p>
            A DELETE method removes the specified resource.
        </p>
    </>
}