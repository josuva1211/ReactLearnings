React class components
    - When a class component is loaded first constructor will be executed, Then render method, Then ComponentDidMount
    - ComponentDidMount method will be ideally called once the component mounts and mainly used to make api calls to the server

    - There are 2 phases during mount
        - render phase
        - commit phase

    - When you want to call child component multiple times again and again then React will batch the render phase of all the same childs and execute it and the batch the commit phase of all the same childs

    - once the setState is used to update the state and the component will enter to the updating lifecycle and re-render the component which will execute the render method with the updated values

    - componentwillunmount is used to clean up which will avoid memory leaks and potential bugs things which are running in background like timeout, interval which are all good factors for a well stabilized web application

    - To clean up the things in useEffect hook at the end of the useEffect hook we can give the code as follows,
         return () => {
        // Your cleanup code here, e.g., removing event listeners or canceling timers.

        // Make sure to clean up any resources or subscriptions to prevent memory leaks.
        };

Assignment

1. How do you create nested routes react-router-dom configuration?
    We need to create a children array of objects and pass the routes in it as {path:"path",element:"component to which it is mapped"}
    eg:
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<AppLayout/>
            children:[
                {
                    path:"/",
                    element:<Body/>
                } , {	path:"/about",
                    element:<About/>
                }
            ],
            errorElement:<Error/>
        },
    ]);
    Now to load the children according to the path we use <Outlet/>.
    The <Outlet/> element is used as a placeholder. It enables the AppLayout's component to render it's child routes.

2. Read about createHashRouter,createMemoryRouter from React Router docs?
    createHashRouter: This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".

    createMemoryRouter: Instead of using the browser's history, a memory router manages its own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.

3. What is the order of life cycle method calls in class based components.
    Order is - 
    1. constructor()
    2. render()
    3. componentDidMount()
    4. componentDidUpdate()
    5. componentWillUnmount()

4. Why do we use componentDidMount()?
This method is invoked immediately after component is mounted(inserted into the tree).
This method is called during the Mounting in commit phase of the React Life-cycle i.e after the component is rendered.
This is an excellent place to instantiate network request (make API calls), to set up any subscriptions etc.

5. Why do we use componentWillUnmount()? Show with example.
    - componentwillunmount is used to clean up which will avoid memory leaks and potential bugs things which are running in background like timeout, interval which are all good factors for a well stabilized web application

    - To clean up the things in useEffect hook at the end of the useEffect hook we can give the code as follows,
         return () => {
        // Your cleanup code here, e.g., removing event listeners or canceling timers.

        // Make sure to clean up any resources or subscriptions to prevent memory leaks.
        };

6. (Research) Why do we use super(props) in constructor?
    In React, when you define a constructor in a class component, you need to call super(props) as the first statement inside the constructor. This is a requirement when you want to access the this.props object within the constructor and any other methods in the class. The purpose of using super(props) is related to how React manages the inheritance chain and the component's state.

7. (Research) Why can't we have the callback function of useEffect as async?
    The primary reason useEffect does not support async callback functions is that it doesn't handle promises directly. It expects the callback function to either return nothing or return a cleanup function (if necessary) to clean up any resources when the component unmounts or before the next effect is triggered.

    An async function returns a promise, and useEffect cannot directly handle the promise resolution and cleanup. If you try to make the callback function of useEffect async, any promise returned will be ignored, and potential errors or cleanup inside the async function might not be handled correctly.


    