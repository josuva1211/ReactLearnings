import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            count: 0,
            count2: 2
        }
    }

    render() {
        const { name, location } = this.props;
        const { count, count2 } = this.state;

        return (
            <div className="user-card">
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 2,
                    })
                }}>Increment</button>
                <h1>Count: {count}</h1>
                <h1>Count: {count2}</h1>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: shri@gmail.com</h4>
            </div>
        )
        
    }
}

export default UserClass