Assignment

1. Is JSX mandatory for React?
    - No, JSX is not mandatory for React. But it is highly recommended to use JSX as it provides a more concise and expressive way to describe the structure of your user interface.
    - Without JSX, you can still create React components using plain JavaScript or other templating languages like TypeScript, but it might become more cumbersome and less intuitive to work with the virtual DOM and compose complex UI elements.

2. Is ES6 mandatory for React?
    - No, ES6 (ECMAScript 2015) is not mandatory for writing React applications, but it is highly recommended and widely used for several reasons. React itself does not enforce any specific version of JavaScript, and you can write React code using older JavaScript versions like ES5 as well.
    - However, using ES6 and newer versions of JavaScript brings significant benefits, making your code more concise, readable, and maintainable. Some of the advantages of using ES6 with React includes, arrow functions, classes, destructuring assignments, template literals, Modules, Spread Syntax, let and const

3. {Component} vs {<Component />} vs <Component></Component>
    - Using {Component} in this manner will not render the component itself; it will only return the reference to the component function.
    - This syntax is used to render the actual component. The component is wrapped inside curly braces, and the self-closing tag <Component />
    - This is the standard way to use a component in JSX. You directly use the component's name within JSX tags, and it gets rendered as a child element

4. How can I write comments in jsx
    - In JSX, we can write comments using curly braces and surrounding the comment text with {/* ... */}

5. What is the DB <React.Fragment></React.Fragment> and <></>?
    - In React, the <React.Fragment> and <> (also known as fragment shorthand or empty fragment) are both used as a way to group multiple elements together without adding an extra DOM element to the rendered output. This is especially useful when you want to return multiple elements from a component's render method but want to wrap them in a single container.
    - Using a regular container like <div> would work, but it might be semantically incorrect if you don't need an additional div in your DOM structure. That's where fragments come in handy.
    - Since React version 16.2, you can use the fragment shorthand syntax <> to achieve the same result as <React.Fragment>. This syntax is more concise and is widely used in modern React code:

6. Virtual DOM and Reconcillation?
    - The Virtual DOM acts as a lightweight copy of the actual DOM. When changes are made to a React component's state or props, React doesn't immediately update the real DOM. Instead, it creates a virtual representation of what the DOM should look like based on the changes (a Virtual DOM tree). This Virtual DOM is a simple JavaScript object that reflects the desired UI state
    - Once the Virtual DOM is created, React compares it with the previous Virtual DOM snapshot (created during the last update). This process is known as "reconciliation" or "diffing." React efficiently calculates the minimal number of changes needed to transform the current Virtual DOM into the updated Virtual DOM.
    - After the diffing process, React knows exactly which parts of the actual DOM need to be updated. It then performs the necessary updates on the real DOM in a batch, minimizing the number of direct manipulations on the browser's DOM. This approach is much more efficient and reduces the performance overhead compared to updating the entire DOM every time a change occurs.

7. What is React Fiber?

    React Fiber is a reimplementation of the React reconciliation algorithm, the core part responsible for updating the Virtual DOM and determining what changes to apply to the actual DOM. It was introduced in React version 16 and is a complete rewrite of the previous reconciliation algorithm.

    The term "Fiber" refers to the individual units of work that React uses to perform the reconciliation process. The idea behind React Fiber is to make the process of updating the UI more efficient and to improve the overall performance of React applications, especially for complex and interactive user interfaces.

    The key goals of React Fiber are:

        Incremental rendering: With the previous reconciliation algorithm, updating the entire Virtual DOM in one pass could lead to performance bottlenecks, especially with large components or complex UIs. React Fiber introduces the concept of incremental rendering, allowing React to split the work into smaller chunks (Fibers) and prioritize, schedule, and pause/resume work as needed. This enables smoother and more responsive user interfaces, as work can be interrupted and resumed to avoid blocking the main thread.

        Prioritization and scheduling: React Fiber introduces a new priority model, allowing developers to assign different levels of priority to certain updates. This means that React can prioritize more urgent updates (e.g., user interactions) over less critical updates, ensuring a better user experience.

        Time-slicing: Time-slicing is a technique used by React Fiber to break up the rendering work over multiple frames. It allocates small time slices of work to be performed during each frame, preventing the application from freezing or becoming unresponsive while rendering is in progress.

        Error boundaries: React Fiber introduces error boundaries, which allow developers to define how errors in certain parts of the component tree are handled gracefully. Error boundaries help prevent an entire UI from crashing due to an error in a single component.

    Overall, React Fiber significantly improves the performance and responsiveness of React applications, making it better suited for modern, highly interactive user interfaces. Most of the changes introduced by React Fiber are internal to React itself and don't require developers to make significant changes to their code. However, the improvements in rendering performance and the ability to prioritize and schedule work better make React applications feel more fluid and responsive.

8. Props in React   
    - Normal arguments to functions
    - Used to pass dynamic data from one component to another 

9. Config Driven UI
    - Our UI is controlled by our data configurations
    - Config-driven UI, also known as Configuration-driven UI or Configurable UI, is an approach in software development where the user interface (UI) of an application is defined or customized using external configuration files or data instead of hardcoding the UI elements and behavior directly in the codebase.
    - In a config-driven UI approach, developers use configuration files or data (e.g., JSON, XML, YAML) to specify the structure and appearance of the UI components, their layout, data bindings, interactions, and other UI-related aspects. This configuration is usually separate from the application's core logic and can be modified or extended without changing the underlying codebase.

10. When and Why we need Keys in React?
    - While rendering a list of items in the UI
    - Keys should be always assigned with uniques id's so the next time while re-rendering it will not re-render as it uses caching. Only the new items will be rendered

11. Can we use index as keys in React?
    - Never use index as keys because the order might change and causes unnecessary re-renders 
