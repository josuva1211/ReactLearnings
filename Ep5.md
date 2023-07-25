Why frameworks when we can achieve everything through normal HTML, CSS, JS. Because, it gives good developer experience. Code less and do more. 

Three Types of Exports
    - Default Exports
        export default Component
        import Component from "Path"
        Usecase: When you have a single item to export
    - Named Exports
        export const Component
        import { Component } from "Path"
        Usecase: When you have a multiple items to export
    
In React, the UI and Data are tightly coupled and whenever the data changes and subsequently UI changes

React Hooks are normal JS Utility functions

useSate => Whenever a state variable changes React will re-render our component

Virtual DOM is representation of Actual DOM

Evey Element in React is an object

So, while re-rendering react will find the difference between the Current and Previous and update the UI with the new difference which is called as Reconcillation or React Fiber

Assignment

1. What is the difference between Named export, Default export and * as export
    Three Types of Exports
    - Default Exports
        export default Component
        import Component from "Path"
        Usecase: When you have a single item to export
    - Named Exports
        export const Component
        import { Component } from "Path"
        Usecase: When you have a multiple items to export
    - * Exports
        as the name suggests in a file if we have multiple exports, we can use the * to import all the exports and use it using the alias name followed by dot operator and the particular export name

2. What is the importance of Config.js file
    - This file will help us to define constants, URL's, common variables which can be used throughout the application.
    - It is a good practice to define them using capital letters and underscore. Eg. MAX_LENGTH, API_URL

3. What are React Hooks?
    - React hooks are functions that enable functional components to use state and other React features without writing a class. They make it easier to reuse logic and manage component state in functional component.

4. Why do we need a useState hook?
    - Whenever our data is manipulated and gives us the newer results, while updating to a normal variable will not make any changes to the UI.
    - So, with the help of the useState hook we will have a state variable and a function to update the state value.
    - While updating the state, react will automatically re-render the UI with the updated state value or object.

