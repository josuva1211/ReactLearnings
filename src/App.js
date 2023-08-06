import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { FaUserCircle  } from "react-icons/fa";

import AppLayout from "./components/AppLayout";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";


const Heading = React.createElement("h1", {id: "heading"}, "Welcome to root");

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <About />
                    </Suspense>
                )
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery />
                    </Suspense>
                )
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
    Header
        - Logo
        - Nav Items
    Body
        - Search
        - RestaurantContainer
            - RestaurantCard
                - Image
                - Name
                - Cuisine
                - Rating

    Footer
        - Copyright
        - Links
        - Address
        - Contact
// */

// const Title = () => (
//     <h1 className="head">
//         Namaste React using JSX!
//     </h1>
// );

// //Component Composition
// const HeadingComponent = () => (
//     <>
//         <NavbarComponent />
//         <div id="container-1">
//             {Title()}
//             <Title></Title>
//             <Title />
//             <h1 id="heading">Namaste React Functional Component</h1>
//         </div>
//         <div id="container-2">
//             <h1>Container 2</h1>
//         </div>
//     </>
    
// )

// const NavbarComponent = () => {
//     return (
//         <>
//             <nav className="navbar">
//                 <img src="https://images.unsplash.com/photo-1688870550853-f5956b4c010d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
//                 <input type="text" name="" value="SEARCH..." />
//                 <FaUserCircle style={{color: 'white', fontSize: '50px', padding: '10px'}} />
//             </nav>
//         </>
//     );
// }



root.render(<RouterProvider router={appRouter} />);