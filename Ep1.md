CDN Links React 
    - Allows you to import React Libraries as a CDN inside our html file.
    - Contains two CDN. React and ReactDOM
React.createElement will not create an element, instead it will still be a js object which has element type, attributes and content as params.
ReactDOM.createRoot and Render will create and reder elements in the UI

Example of creating a nested UI in React

const parent = React.createElement("div", {id: "parent"},
    React.createElement("div", {}, 
        React.createElement("h1", {id: "heading"}, "Hello!")
    )
);

const heading = React.createElement("h1", {id: "Heading"}, "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

root.render(parent);

React is a Library and not a framework because it can work in a small independent portion of our app

What if in your root you defined some elements and in App.js you add dynamically, it will replace the elements defined through HTML

The order of files matter a lot. If you define your own js file and use React API's before React CDN Links it will throw error

Assignments

1. what is emmet?

Emmet is a popular plugin for web developers and code editors that enhances productivity by providing shortcuts and abbreviations for writing HTML and CSS code. It originated as a part of the Emmet toolkit, previously known as Zen Coding. Emmet allows developers to write HTML and CSS code using simple abbreviations and then expand them into complete, well-formed code snippets.

With Emmet, you can create complex HTML structures and repetitive code patterns quickly and efficiently. It supports various shorthand notations and enables developers to generate code snippets for commonly used elements, such as divs, lists, tables, and more. By utilizing Emmet, developers can save time and reduce the amount of manual typing required.

Emmet is typically integrated into code editors or IDEs (Integrated Development Environments) as a plugin. It supports a wide range of popular editors, including Visual Studio Code, Sublime Text, Atom, and many others. The plugin parses the abbreviations and expands them into full-fledged HTML or CSS code, providing a significant boost to the developer's workflow.

2. Difference between a library and a framework

The terms "library" and "framework" refer to two distinct concepts in software development. While both serve as reusable components, there are key differences between them:

Library:

    A library is a collection of pre-written code modules or functions that developers can use to perform specific tasks or solve particular problems.
    It typically focuses on providing a specific set of functionalities, such as file handling, networking, data manipulation, or graphical user interfaces (GUI).
    Libraries are often designed to be independent and flexible, allowing developers to select and use specific modules as needed in their applications.
    Developers have more control and responsibility over the overall structure and flow of their code when using a library.
    Examples of popular libraries include NumPy (for numerical computing in Python), React (for building user interfaces in JavaScript), and jQuery (for simplifying JavaScript interactions with HTML elements).

Framework:

    A framework is a more comprehensive and structured software environment that provides a foundation for building applications.
    It offers a complete set of tools, libraries, and conventions that dictate the overall architecture and flow of an application.
    Frameworks typically define the structure and organization of code, enforce certain design patterns, and provide a range of built-in functionalities and utilities.
    Developers use the framework by extending or customizing its components to build their specific application.
    Frameworks often require developers to follow a specific programming paradigm or methodology, such as model-view-controller (MVC) or event-driven programming.
    Examples of popular frameworks include Ruby on Rails (for web development in Ruby), Django (for web development in Python), and Angular (for building web applications in JavaScript).

In summary, while libraries provide specific functionalities to solve targeted problems, frameworks offer a comprehensive structure and set of tools to build applications following predefined patterns and conventions. Libraries offer more flexibility and control, whereas frameworks provide a higher level of abstraction and a defined approach to development.

3. What is CDN? Why do we use it?

CDN stands for Content Delivery Network. It is a geographically distributed network of servers that work together to deliver web content, such as images, CSS files, JavaScript files, videos, and other static or dynamic resources, to users based on their geographical location.

The main purpose of using a CDN is to improve the performance and availability of web content for users. Here are some reasons why CDN is used:

    Reduced latency: CDNs have servers located in various geographical locations. When a user requests content, the CDN delivers it from the server that is closest to the user's location. This reduces the round-trip time (latency) and improves the speed at which content is delivered.

    Improved load balancing: CDNs distribute the load across multiple servers, reducing the burden on any single server. This helps to handle a large volume of concurrent requests and prevents server overloads, leading to better performance and scalability.

    Enhanced scalability: CDNs can handle high traffic volumes and sudden spikes in demand by scaling horizontally. Additional servers can be added to the CDN infrastructure to accommodate increased traffic and ensure a consistent user experience.

    Bandwidth optimization: CDNs can help optimize bandwidth usage by caching content at edge servers. When a user requests a resource that is already cached on a nearby server, the CDN delivers it from the cache instead of retrieving it from the origin server. This reduces the bandwidth consumed and improves the overall efficiency of content delivery.

    Improved reliability: CDNs enhance the reliability of content delivery by distributing content across multiple servers. If one server fails or becomes unavailable, the CDN can automatically route requests to alternative servers, ensuring content availability and minimizing downtime.

    Global reach: CDNs have a network of servers distributed across different regions and countries worldwide. This enables faster content delivery to users regardless of their location, providing a consistent user experience regardless of geographical distance.

Overall, CDNs offer improved performance, scalability, availability, and bandwidth optimization, resulting in faster and more reliable content delivery to end-users, irrespective of their location. This is particularly beneficial for websites or applications with a large user base and high content demands.

4. Why is React known as React?

React, the popular JavaScript library for building user interfaces, gets its name from its core concept: reactive programming.

Reactive programming is a programming paradigm that emphasizes the responsiveness and reactivity of user interfaces to changes in application state. Instead of manually updating the user interface when data changes, reactive programming enables automatic updates based on a declarative approach. When the underlying data changes, the UI automatically re-renders to reflect those changes.

React was developed by a team at Facebook, led by Jordan Walke. It was initially created to solve specific challenges faced by Facebook engineers while building large-scale applications with dynamic user interfaces. React's core idea was to provide a reactive and efficient way to update user interfaces in response to changing data.

The name "React" captures the essence of how the library handles UI updates. React introduces a virtual representation of the user interface called the Virtual DOM. When the application's state changes, React efficiently compares the new Virtual DOM with the previous one and only updates the necessary parts of the actual browser DOM. This approach allows React to react responsively to changes and update the UI efficiently, hence the name "React."

Additionally, the name "React" also signifies the library's focus on building reusable and composable UI components. React promotes a component-based architecture where the UI is broken down into smaller, reusable pieces called components. These components encapsulate their own logic and state, allowing for easier development, testing, and maintenance of UIs.

In summary, React is named after its core principle of reactive programming, which enables efficient UI updates in response to changing data.

5. what is cross-origin in the script tag

The crossorigin attribute is an optional attribute that can be used in the <script> tag when including external JavaScript files. It is specifically used when loading scripts from a different domain or origin (i.e., a different combination of protocol, domain, and port) than the one serving the current web page.

When a script is loaded from a different origin, the browser enforces a "same-origin policy" for security reasons. This policy restricts the interaction between scripts and resources from different origins, preventing potential malicious actions or unauthorized access to sensitive information.

However, there are scenarios where you may need to load scripts from a different origin, such as when utilizing a Content Delivery Network (CDN) or fetching resources from a third-party server. In such cases, the crossorigin attribute can be used to control how the browser handles the script and its associated CORS (Cross-Origin Resource Sharing) behavior.

The crossorigin attribute accepts two values:

    "anonymous": This is the default value. It indicates that the script is fetched without any credentials (such as cookies or HTTP authentication) and that the server should respond with the appropriate CORS headers to allow the script to be loaded. This is typically used when loading publicly available scripts or resources.

    "use-credentials": This value indicates that the script requires credentials to be sent along with the request. The server should respond with the appropriate CORS headers to allow the script to be loaded with the provided credentials. This is used when loading scripts that require authentication or access to restricted resources.

By specifying the crossorigin attribute with the appropriate value, you ensure that the browser handles the script loading and CORS behavior correctly, based on the security requirements of your application and the external resource being loaded.

6. What is the difference between React and ReactDOM

React and ReactDOM are two related but distinct packages in the React ecosystem:

    React: React is the core library that provides the foundation for building user interfaces. It is a JavaScript library for creating reusable UI components and managing the application state. React introduces a component-based architecture, allowing developers to build encapsulated and reusable UI elements. It provides a declarative syntax for describing how the UI should look based on the application's state, and it efficiently updates the UI when the state changes. React also handles the reconciliation process, which calculates the minimum required changes to the DOM for optimal rendering performance.

    ReactDOM: ReactDOM is a package specifically designed for rendering React components in the browser DOM (Document Object Model). It serves as the bridge between React and the browser environment. ReactDOM provides methods and APIs for rendering React components into the DOM, updating components when the state changes, and handling events. It interacts directly with the browser's DOM APIs to perform these operations. ReactDOM is primarily focused on the web platform and is not used for rendering React components in other environments, such as mobile or server-side.

In summary, React is the core library responsible for building reusable UI components and managing the application state, while ReactDOM is a package that facilitates rendering and updating React components in the browser DOM. They work together to enable the creation and efficient rendering of dynamic and interactive user interfaces in web applications.

7. what are async and defer

async and defer are attributes that can be used in the <script> tag when including external JavaScript files. They affect how the browser handles the loading and execution of these scripts:

    async attribute: When the async attribute is present, the browser will begin downloading the script file asynchronously while continuing to parse the HTML document. As soon as the script is downloaded, it will be executed, potentially interrupting the parsing and rendering of the HTML. Multiple scripts with the async attribute can be downloaded and executed in any order. This is useful for scripts that are not dependent on each other or the DOM structure, such as tracking or analytics scripts.

Example: <script src="script.js" async></script>

    defer attribute: When the defer attribute is present, the browser will begin downloading the script file asynchronously but will defer its execution until after the HTML document has been completely parsed. Scripts with the defer attribute maintain their order of execution. This is useful for scripts that need to access and manipulate the DOM structure, as they are guaranteed to be executed after the DOM has been fully constructed.

Example: <script src="script.js" defer></script>

Both async and defer allow scripts to be loaded in the background while the HTML document is being parsed, reducing the impact on page loading time. However, there are some differences between them:

    With async, the script may execute as soon as it is downloaded, even if the HTML parsing is not yet finished. This can potentially result in scripts executing out of order or before the DOM is fully available.
    With defer, the script is guaranteed to execute only after the entire HTML document has been parsed, ensuring that the DOM structure is ready for manipulation.

It's important to note that the use of async or defer attributes is not suitable for all scripts. Synchronous loading (without async or defer) may still be necessary for scripts that have dependencies on other scripts or need to be executed in a specific order.

8. what is the difference between react.development.js and react.production.js files in CDN?

React provides two different versions of its JavaScript files, namely react.development.js and react.production.js. These files serve different purposes and are used in different environments:

    react.development.js: This file is intended for development purposes. It contains the full, unminified version of the React library, along with additional development-specific warnings and error messages. The code is not optimized for performance or file size. It includes helpful debugging information and provides a better developer experience during the development and debugging process. It is larger in size compared to the production version.

    react.production.js: This file is meant for production environments. It is a minified and optimized version of the React library, designed to be smaller in file size and faster to load. It removes development-specific warnings, debugging information, and extra code that is not necessary for the final production build. The production version is highly optimized for performance and is the recommended version to be used in production deployments.

The choice between using react.development.js and react.production.js depends on the specific context:

    During development and testing, it is common to use react.development.js as it provides more informative error messages and warnings, aiding in debugging and identifying issues during development.
    In production environments, it is recommended to use react.production.js for better performance and reduced file size. The removal of development-specific code and optimizations in the production version contribute to faster loading times and improved efficiency of the application.

When using a CDN (Content Delivery Network) to serve React, both react.development.js and react.production.js versions might be available for use. Developers can choose the appropriate file based on the desired environment and requirements of their application.