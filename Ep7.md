What is a Single Page Application?
    - A SPA is an application with only a single page and it will only interchange the components via Client Side Routing

<Link></Link> is a wrapper class of <a></a> anchor tag

useRouteError is a hook which gives information about the error during routing

Assignment

1. What are the various ways to add images into our App? Explain with code examples.
    - The first way to add images in our app using `CDN link`.
    Example:
    <img src = "https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0"/>
    
    - The second way to add images in our app using `import`.
    Example:
    import {logo} from ".Images/logo.png";

    function Header(){
    return(
        <>
        <img src = {logo} />
        </>
    )
    }
    Firstly, in this we will store our image in any folder and then we will import that images via folder structure.
    The good way of structuring of image folder is "assets/Images/logo.png"

2. What would happen if we do console.log(useState())?
        - If we do console.log(useState()), we get an array [undefined, function] the first item is an array is state variable is undefined and the second item is an array is function which is setState function. Through this function we can change the value of state variable.

3. How will useEffect behave if we don't add a dependency array?
    - When dependency array is not added in the useEffect hook then it will execute the logic inside the useEffect on every render of the component which includes re-render

4. What is SPA?
    - A Single Page Application (SPA) is a web application or website that operates within a single web page. Unlike traditional multi-page web applications, where each page requires a full reload from the server, SPAs dynamically update the content on the page without requiring a complete page refresh. This creates a smoother and more seamless user experience similar to that of a desktop application.

5. What is the difference between client side routing and server side routing

    Client-side routing and server-side routing are two different approaches to handle navigation and routing in web applications. They both have their own advantages and use cases.

    Client-side routing:

        Routing on the client: In client-side routing, the routing logic is handled on the client-side (i.e., in the user's web browser) using JavaScript. When the user clicks on a link or interacts with the application to navigate to a different "page," the JavaScript code dynamically updates the content on the page without making a request to the server for a new HTML page.

        Single Page Application (SPA): Client-side routing is often associated with Single Page Applications (SPAs). SPAs load the initial HTML, CSS, and JavaScript and then communicate with the server via APIs (typically using AJAX) to fetch data. The content changes without reloading the entire page, resulting in a smoother and more responsive user experience.

        Advantages:
            Faster navigation: Since only the necessary data is fetched from the server, navigation within the application is generally faster.
            Better user experience: SPAs offer seamless transitions and interactions, giving users a more desktop-like experience.
            Reduced server load: The server's primary role is to provide APIs, reducing the need for serving HTML pages for each request.

        Challenges:
            SEO concerns: Client-side rendered content might not be as SEO-friendly as server-side rendered content.
            Initial load time: The initial loading time of the SPA may be longer, especially for larger applications, as all required JavaScript must be loaded first.

    Server-side routing:

        Routing on the server: In server-side routing, the routing logic is handled on the server-side. When a user navigates to a specific URL, the server processes the request, generates the appropriate HTML page (with data), and sends it back to the client.

        Traditional multi-page applications: Server-side routing is commonly used in traditional multi-page applications, where each distinct URL corresponds to a separate HTML page served by the server.

        Advantages:
            Better SEO: Each page is a separate HTML document, making it easier for search engines to index the content.
            Faster initial load: For smaller applications, the initial load time might be faster as the server delivers the content directly.

        Challenges:
            Slower navigation: Since the server needs to process each request, navigation might be slower compared to client-side routing, which only updates the content in the browser.
            More server load: The server is responsible for generating and serving complete HTML pages for each request, which can lead to higher server load, especially for complex applications.

    Both client-side routing and server-side routing have their use cases, and the choice depends on the specific requirements of the application. Some applications might benefit from the interactivity and performance of client-side routing in SPAs, while others might prioritize SEO and simplicity offered by server-side routing in traditional multi-page applications.

