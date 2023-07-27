Assignments

1. Monolith Architecture
    - Older Approach where in all your services Frontend, Backend, DB, Auth, SMS, Email will be tightly coupled and uses one single coding language. Eg. JSP Pages
    - A small change in any of the services will be affected to other services. ie. dependent

2. Microservices Architecture
    - Newer approach which is widely used in the industry. All the services are loosely coupled and can use different coding languages for different services. Services are not dependant on others. Changes in one service will not affect the functioning of other service

3. Difference between Monolith and Microservice architecture?
    Monolith and microservice architectures are two different approaches to designing and structuring software applications. They have distinct characteristics and are suited for different types of projects. Here are the key differences between the two:

    Architecture Style:
        Monolith: In a monolithic architecture, the entire application is built as a single, cohesive unit. All components, modules, and functionalities are tightly integrated into a single codebase and deployed as a single application.
        Microservices: In a microservice architecture, the application is decomposed into a set of small, independent services. Each service represents a specific business capability and operates independently. These services communicate with each other through well-defined APIs.

    Modularity:
        Monolith: Monolithic applications tend to be less modular, with all components closely coupled. Changes in one part of the application can have a cascading effect on other parts, making maintenance and scalability more challenging as the application grows.
        Microservices: Microservices are highly modular. Each service can be developed, deployed, and maintained independently, making it easier to scale and manage different parts of the application separately.

    Scalability:
        Monolith: Scaling a monolithic application typically involves replicating the entire application on multiple servers. This can be inefficient because not all components of the application may require the same level of scaling.
        Microservices: Microservices allow for more granular scalability. You can scale individual services based on demand, which results in a more efficient use of resources.

    Technology Stack:
        Monolith: In a monolithic architecture, the entire application shares the same technology stack. This can limit the flexibility to use different technologies for different parts of the application.
        Microservices: Each microservice in a microservice architecture can use its own technology stack, chosen based on the specific requirements of the service. This allows for greater flexibility and the ability to use the best tools for each task.

    Development Speed:
        Monolith: Development in a monolithic architecture can be faster initially since everything is in one codebase and has fewer complexities in terms of inter-service communication.
        Microservices: Microservices may take longer to set up and develop initially due to the additional considerations of inter-service communication, deployment, and orchestration. However, they can lead to increased development speed in the long term, especially when multiple teams work independently on different services.

    Deployment and DevOps:
        Monolith: Deploying a monolithic application involves deploying the entire application at once, which may lead to more extended deployment times and potentially more risk in case of issues.
        Microservices: With microservices, individual services can be deployed independently, allowing for more frequent updates, faster deployments, and the ability to adopt continuous integration and continuous deployment (CI/CD) practices.

4. Why do we need useEffect hook?
    useEffect hook is mainly used to create side effects in our component like API call
    Two Ways to Load Apps,
    1. Load App => API Call => Render () Wait for the Response till then UI will be blank
    2. Load App => Render the Skeleton => API Call => Re Render with data (React Way) Better User Experience

    - useEffect will be useful to implement the 2nd approach
    - Once the UI is rendered and the useEffect callback will be executed

5. What is optional chaining?
    - Optional Chaining will be handly when we are dealing with nested objects and try to get some data out of it. 
    - Eg. json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    - In the above example while accessing nested object before the dot operator we are using ? which denotes optional chaining and even if any particular property doesn't exist it will throw undefined which will not break our code

6. What is Shimmer UI?
    - Shimmer UI will be useful when we are waiting for a server response till that time we can show some skeleton of the elements present in the UI.
    - Which gives good used experience to the user and it is a industry standard used in Instagram, Youtube, etc

7. What is the difference between JS expression and JS statement?

    In JavaScript, expressions and statements are two fundamental building blocks of code, each serving a different purpose. Here's the difference between them:

    JavaScript Expression:
    An expression in JavaScript is any valid unit of code that produces a value. It can be a combination of variables, operators, and function calls, which when evaluated, results in a single value. Expressions can be as simple as a single variable or constant, or they can be more complex involving mathematical operations or function invocations.

    Examples of JavaScript expressions:

    javascript

    // Simple expressions
    5
    "Hello, " + "world!"
    myVariable
    3 + 7

    // Complex expressions
    2 * (8 + 5)
    Math.sqrt(16)
    myFunction(10)

    JavaScript Statement:
    A statement in JavaScript is a complete instruction that performs an action or causes an effect. Unlike expressions, statements do not produce a value. They are executed to perform specific tasks, such as defining variables, loops, conditionals, or function declarations.

    Examples of JavaScript statements:

    javascript

    // Variable declaration statement
    let x = 10;

    // Conditional statement
    if (x > 5) {
    console.log("x is greater than 5");
    } else {
    console.log("x is less than or equal to 5");
    }

    // Loop statement
    for (let i = 0; i < 5; i++) {
    console.log(i);
    }

    // Function declaration statement
    function add(a, b) {
    return a + b;
    }

    Key Differences:

        Expressions produce a value, while statements perform actions.
        Expressions can be part of a statement or used on their own, while statements cannot be used as part of expressions.
        Expressions can be nested within each other to create more complex expressions, while statements cannot be nested directly.

    In summary, expressions are used to produce values, and they can be as simple or as complex as needed. Statements, on the other hand, are used to execute actions and control the flow of a program. Understanding the distinction between expressions and statements is crucial for writing effective and meaningful JavaScript code.

8. What is conditional rendering? Explain with a code example?
    - Condition rendering can be used inside our component html code for rendering purpose.
    - Based on the condition we show the UI
    - restaurants.length === 0 ? <Shimmer /> : <RestaurantCard />

9. What is CORS?
    - CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to restrict web pages from making requests to a different domain than the one that served the web page. In other words, it is a mechanism that allows servers to specify who can access their resources and who cannot.

    - The Same-Origin Policy (SOP) is a fundamental security measure in web browsers that prevents web pages from making requests to a different domain than the one the page originated from. While this policy is essential for preventing certain types of web attacks, it can also create challenges when trying to access resources (like APIs) hosted on different domains.

    - CORS provides a way to relax the Same-Origin Policy selectively, allowing controlled access to resources from different domains. When a web page makes a request to a different domain, the browser sends a preflight (OPTIONS) request to the server to check if the target server allows requests from the web page's origin. The server can respond with specific headers indicating whether the request is allowed or not.

10. What is async and await?
    - async and await is a modern way of handling asynchrounous operations
    - It provides a syntatically an easy code for developers to make async api calls
    - Async Function (async):
    An async function is a function that always returns a Promise. It allows you to use the await keyword inside the function to wait for a Promise to resolve before proceeding further. To declare an async function, you use the async keyword before the function declaration:

    async function myAsyncFunction() {
    // Asynchronous operations using await...
    const result = await someAsyncOperation();
    return result;
    }

    Await Keyword (await):
    The await keyword is used inside an async function to pause the execution of the function until the awaited Promise resolves. It allows you to work with Promises in a more synchronous style without having to chain .then() and .catch() calls.

    async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    }

    In the example above, the fetchData function is an async function that fetches data from an API using the Fetch API. The await keyword is used before the fetch() and response.json() calls to wait for the Promises to resolve before assigning the data to the data variable.

11. What is the use of "const json = await data.json()"
    It will convert our response object to json object which will be helpful in accessing the data while rendering in the UI

Notes: 
When your state value changes your whole component will re-render(reconcillation cycle) that's why if your state variable is defined as const variable it will not throw any error as we are not reassigning the state variable but due to re-render the state variable is considered as a new variable.


