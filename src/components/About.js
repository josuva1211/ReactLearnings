import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log("Parent Constructor")
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount");
    }

    render() {
        // console.log("Parent Render");
        return (
            <div className="about-us">
                <h1>About Us</h1>
                <h2>This is Namaste React Series</h2>
                {/* <User name={"Shri Prakash (function)"} location={"Tirupur"} /> */}
                <UserClass name={"First"} location={"Coimbatore"} />
                {/* <UserClass name={"Second"} location={"Coimbatore"} /> */}
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div className="about-us">
//             <h1>About Us</h1>
//             <h2>This is Namaste React Series</h2>
//             {/* <User name={"Shri Prakash (function)"} location={"Tirupur"} /> */}
//             <UserClass name={"Shri Prakash (class)"} location={"Coimbatore"} />
//         </div>
//     )
// }

export default About;