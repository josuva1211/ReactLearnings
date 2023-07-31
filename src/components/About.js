import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <h2>This is Namaste React Series</h2>
            <User name={"Shri Prakash (function)"} location={"Tirupur"} />
            <UserClass name={"Shri Prakash (class)"} location={"Coimbatore"} />
        </div>
    )
}

export default About;