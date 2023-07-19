const parent = React.createElement("div", {id: "parent"},
    [
        React.createElement("div", {id: "child1"}, [
                React.createElement("h1", {id: "heading1"}, "I am H1 Heading"),
                React.createElement("h2", {id: "heading2"}, "I am H2 Heading")
            ]
        ),
        React.createElement("div", {id: "child2"}, [
                React.createElement("h1", {id: "heading11"}, "I am H1 Heading"),
                React.createElement("h2", {id: "heading21"}, "I am H2 Heading")
            ]
        )
    ]
);

const heading = React.createElement("h1", {id: "Heading"}, "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

root.render(parent);