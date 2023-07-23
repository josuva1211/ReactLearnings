npx parcel index.html can be configured in package.json under scripts
    "start": "parcel index.html",
    "build": "parcel build index.html"
Then everytime we start our server we can use [npm start or npm run start]
For production build we can use [npm run build]

JSX is a javascript syntax which is easier to create React elements which makes developers life easy
JSX is not HTML inside Javascript. JSX is HTML like syntax

Does your JS engine understands your JSX code - No
    - <h1 id="heading">Namaste React using JSX</h1>
    - PARCEL will transpile our code to JS for the browser to read using Babel
    - JSX => React.createElement => React Element -> JS Object => HTML Element(render)

React Component
    - Class Component
    - Functional Component

React Functional Component is a normal JS function which return a JSX
Always define the functional component with a capital letter

Component Composition
    -In React, you create reusable building blocks called components that encapsulate specific functionality, UI elements, or behavior. These components can then be composed together to form more complex and feature-rich user interfaces.

In JSX we can inject any JS code inside curly braces

When you write js code in curly braces it sanitizes before executing the code thus avoiding cross site security attacking (XSR)

JSX expressions can have only one parent element at the root level
The below example is not possible inside JSX code
(
    <div></div>
    <div></div>
)

So, we can overcame the above scenario by adding a root element as a div. But, its not a good idea as it will add an extra element to the DOM.

So, React introduced React.Fragment which capsulates your html elements inside it and it can be written as <></>

