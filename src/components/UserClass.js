import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        // console.log(props);
        //debugger;
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Dummy",
                avatar_url: "Dummy"
            }
        }
        // console.log(this.props.name + "child constructor");
    }

    async componentDidMount() {
        // console.log(this.props.name + "Child Component Did Mount")
        const data = await fetch("https://api.github.com/users/josuva1211");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate() {
        this.timer = setInterval(() => {
            console.log("Interval running")
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("User is unmounted");
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;

        // console.log(this.props.name + "child render");

        return (
            <div className="user-card">
                {/* <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 2,
                    })
                }}>Increment</button>
                <h1>Count: {count}</h1>
                <h1>Count: {count2}</h1> */}
                <img src={avatar_url} alt="" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: shri@gmail.com</h4>
            </div>
        )
        
    }
}

export default UserClass