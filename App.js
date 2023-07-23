import React from "react";
import ReactDOM from "react-dom/client";

import { FaUserCircle  } from "react-icons/fa";

const Heading = React.createElement("h1", {id: "heading"}, "Welcome to root");

const root = ReactDOM.createRoot(document.getElementById("root"));

const jsxHeading = <h1 className="head">Namaste React using JSX</h1>



const Title = () => (
    <h1 className="head">
        Namaste React using JSX!
    </h1>
);

//Component Composition
const HeadingComponent = () => (
    <>
        <NavbarComponent />
        <div id="container-1">
            {Title()}
            <Title></Title>
            <Title />
            <h1 id="heading">Namaste React Functional Component</h1>
        </div>
        <div id="container-2">
            <h1>Container 2</h1>
        </div>
    </>
    
)

const NavbarComponent = () => {
    return (
        <>
            <nav className="navbar">
                <img src="https://images.unsplash.com/photo-1688870550853-f5956b4c010d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                <input type="text" name="" value="SEARCH..." />
                <FaUserCircle style={{color: 'white', fontSize: '50px', padding: '10px'}} />
            </nav>
        </>
    );
}

root.render(<HeadingComponent />);