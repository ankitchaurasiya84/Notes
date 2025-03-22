==========reactJS ===============
Js librarry ,Component-Based Architecture , . Virtual DOM , State Management, JSX Syntax,  Cross-Platform Development

=======What is SPA?============
A Single Page Application (SPA) in React is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the app, without refreshing the entire page.

========DOM vs V DOM===========

Here’s a simplified comparison table highlighting the key differences between the DOM and Virtual DOM:

| **Feature**         | **DOM (Document Object Model)**           	| **Virtual DOM**                                					|
|---------------------|-------------------------------------------|------------------------------------------------					|
| **Nature**            | Actual representation of the UI in the browser. | In-memory, abstract copy of the real DOM. 			 		|
| **Updates**    	 | Direct manipulation of the browser's DOM.  | Updates are first made to the Virtual DOM.     					|																									
| **Performance* 	   | Slower with frequent updates due to reflows and repaints. | Faster as it minimizes direct DOM manipulation. 	|
| **Change Detection** | No built-in diffing mechanism.            | Uses a diffing algorithm to find and apply minimal changes. 		|
| **Usage**           | Native browser feature.                   | Used by libraries like React.                  						|
| **Rendering**       | Updates UI immediately.                   | Batches updates and applies them efficiently.  						|
| **Complexity**      | Simple, but inefficient for complex UIs.  | More complex, but highly optimized for performance. 				|

=====================What is RJS component==========
Reuseable building block of cretinhg UI

==================Scaffolding==============
Scaffolding in React.js is the process of quickly setting up a new React project with a predefined structure 
and essential configurations using tools like Create React App or Vite.

=================npm=========================
NPM (Node Package Manager) is a tool for managing JavaScript packages and dependencies in Node.js projects.

================node module==================
Node Module is a reusable piece of code in Node.js that can be exported and imported across files, promoting code organization and reuse.

=================public folder===============
	The public folder in a React.js application is a directory that contains static assets, such as HTML files, images, and 
	other files that do not require processing by Webpack or Babel.

=====================src===========================
The src folder in a React.js application is where the main source code of the application resides. compiled by babel

=====================Babel==============================================
Babel is a JavaScript compiler , converts JSX and modern JS to browser-compatible code.

======================webpack==========================================
Webpack bundles all your project files, optimizing them for efficient delivery to the browser.

=================role of return in app.js function=========================
to return componets
======================default export=================
to make this compoment available for import in other files

====================react flow=============================================

componets==>app.js==>index.js==>index.html 
index.js: 	its render all componets and replace to the root of index.html file with newly rerender root root elements

===================ReactDOM===================
its a library to convert your componets(written in react syntax) to your browser DOM(auctual DOM)
const root = ReactDOM.createRoot(document.getElementById('root'));

====================StrckMode======================

	•	Only in Development: The double rendering happens only in development mode. In production, components are rendered just once.
	•	Not a Bug: It’s a feature to help catch potential problems early, and the double rendering is automatically disabled in production
==================Advantages of JSX================
JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe the structure of the (UI). It looks similar to HTML but is written within JavaScript code. 
JSX allows you to write UI elements and components in a declarative and intuitive way.
advantages: 1: Type Safety
			2: improve performance
			3: write html code in js
===================transpiler===========
when we convert one file to another file without loosing their properties. higher version to lower version so old browser can understand 

====================fragment================
fragment is way to group a list of children without adding extra node in DOM.  <></> or <fragment></fragment> 
===================props==================
props are a ways  to pass properties parent componet to children compomnent
==================conditional rendering============

==================Virtual DOM==================
Its replica of REAL DOM. reactJS usage Virtual DOM to efficently update UI without re rendering the entire Webpage which improve performance

========================Componets================
its a reuseable building block of creating UI

==========State-stateless-statfull================
In React:

- **Stateless Components**: Also known as functional components, they don't manage or store any state. They simply receive props and render UI based on those props. Example:
  ```jsx
  const MyComponent = ({ name }) => <div>Hello, {name}!</div>;
  ```

- **Stateful Components**: These components manage their own state and can change data over time. They are typically class components or use React hooks like `useState` in functional components. Example:
  ```jsx
  const MyComponent = () => {
    const [count, setCount] = useState(0);
    return <div>Count: {count}</div>;
  };
  ```

=============prop drilling================
Prop drilling in React is passing props through multiple component layers to reach a deeply nested child. 
It can make code harder to manage. Alternatives include using the **Context API** or state management tools like **Redux**.
===============HOC=============higher order componet================



===============life cycle of React componet=====================

=================custom hooks=======================

=================Lazy loading======
In summary, **lazy loading** in React is a technique that delays loading components until they are needed, improving performance by reducing the initial load time. This is achieved using:

1. **`React.lazy()`**: Dynamically imports the component.
2. **`Suspense`**: Displays a fallback (like a loading spinner) while the component is loading.

This results in faster initial load times, reduced memory usage, and an overall optimized user experience.

======================

===============useEffect hooks===============
Use effect called after ui render .ie Side effect( calling APi, loading subscription)
It accept two parameter :1 effect function, 2: dependency Array
Dependency arry (optional) act as trigger for use effect to rerun. if dependency array changes then re execute useEffect
multiple depecndy can have
[] array indicates useeffect run at once.


========useContext============
it is used to pass data child to parent without using props

=====createContext() function===

createContext) function returns an object with Provider and Consumer properties.
* The Provider property is responsible for providing the context value to all its child components.
useContext) method or Consumer property can be used to consume the context value in child components.

============when we use useContext==========
Use useContext instead of props when you want to avoid prop drilling and 
access context values directly within deeply nested components.

) Hooks:
useState: Manages state in functional components.


useEffect: Handles side effects in functional components.
useContext: Accesses the context in functional components. 
useReducer: Manages complex state logic with a reducer function.

==========================useMemo====================

useMemo: hook is used to memoize values to prevent unnecessary recalculations on every render.


The useMemo hook in React is used to optimize performance by memoizing
expensive calculations, ensuring that the computation is only re-executed
when its dependencies change. This prevents unnecessary recalculations on
every render, especially when dealing with expensive operations or large
datasets.


Syntax:
const memoizedValue = useMemo(() => {
  // Expensive computation
  return result;
}, [dependencies]);

The first argument is a function that contains the expensive computation.
The second argument is an array of dependencies. The memoized value is recalculated only when one of the dependencies changes.

===========================================================

useCallback: Memoizes callback functions to prevent unnecessary renders.


Real-Life Analogy
Imagine you're working in a team, and you have a standard operating procedure (SOP) for specific tasks:

Without useCallback: The SOP is rewritten from scratch every day, even if it hasn't changed.
With useCallback: The SOP is stored and reused unless something in the task changes.

Websoket:  WebSockets allow for continuous, real-time communication between the client and server.

localStorage: size 5mb, It persist even after browser is closed , Data in localStorage is available across different tabs and windows of the same origin

localStorage, sessionStorage, and cookies?

Lazy Loading,
Pagination,
Role based preview
hooks:  	  hooks let you add state, lifecycle methods, and other React features to functional components without needing to write a class-based component.				 Before hooks, you'd have to use class components to manage state and perform side effects,

Stateless vs Statefull component:

```
	Stateless components are simpler, just rendering what’s passed to them as props. They do not maintain or modify any internal state, making them easier to reason about and test.

	Stateful components, on the other hand, handle dynamic behavior, such as managing form inputs, handling user interactions, or fetching and displaying data from an API.

```

=================
Q: "Can you explain what happens if you use useEffect without a dependency array?"
Q: What’s the difference between using useEffect with a dependency array and without one?"
Q:Explain the concept of a "virtual DOM" in React and how it improves performance.

Q:What are the differences between functional components and class components?

Q: What are hooks in React? Can you name a few common ones and explain their usage?

```
	A: The useEffect hook in React is used to perform side effects in your components. A side effect is any action that occurs outside the component’s render process, like:

		Fetching data from an API
		Updating the DOM
		Setting up subscriptions or timers
		Cleaning up resources (like event listeners or intervals)

```

Q: What are controlled and uncontrolled components in React? Can you explain the differences?
A:	In React, uncontrolled components are those where the form data is handled by the DOM itself rather than by the React state.

Q: Explain React's reconciliation process. How does React decide which parts of the DOM need to be updated?

Q: Virtual DOM?
React maintains a virtual DOM, which is an in-memory representation of the actual DOM. When the state or props of a component change, React updates the virtual DOM first, rather than directly manipulating the real DOM.

Q: What is the difference between React.createElement() and JSX? How do they relate?

Q: What is the key prop, and why is it important when rendering lists in React?

Q: Diffing: React compares the new virtual DOM tree with the previous one. This process is known as diffing.
to compare the two trees and detect the differences (called "diffs").
Q: Reconciliation: The process of comparing the old and new virtual DOMs and updating the real DOM in an efficient way.

Q: Spread oprator vs Rest Operator?
The rest operator is used to collect multiple elements into a single array or object.

Q: memorization:  is a technique used to optimize performance by avoiding unnecessary re-rendering of components or recalculation of values. This is often 		achieved through techniques such as memoization and React's built-in hooks like React.memo and useMemo.


useRef: Creates a mutable object that persists between renders.

2) Higher Order Components (HOC):
What?: Functions that take a component and return an enhanced version.
When?: Reuse component logic, share code, or manipulate component behavior.
Why?: Promotes code reusability and separation of concerns.
How?: Wrap a component with a function that adds or modifies its behavior.

3) Life Cycle Methods of Components:
Class Components: Traditional React components using ES6 classes.
Mounting: Component is being created and inserted into the DOM.
Updating: Component is being re-rendered as a result of changes.
Unmounting: Component is being removed from the DOM.

4) State management (all about data):
State/Props: Internal state for a component/external data passed to a component.
Props drilling: Passing props through multiple layers of components.
Context: Provides a way to pass data through the component tree without passing props.

5) Redux or Zustand:
How redux works?: Centralized state management using actions and reducers.
Why?: For managing complex application states.
When?: In large applications with a need for a single source of truth.
Redux Toolkit (RTK): Simplifies Redux setup and usage.

6) Custom Hooks:
When to use?: Extracting and reusing component logic.
Code: Functions prefixed with "use" returning stateful logic.
Why?: Enhances code organization, reusability, and readability.

7) Lazy Loading:
Code splitting: Breaking down the application into smaller parts.
Chunking: Loading only the necessary code chunks.
Suspense: Pausing rendering until a component is ready.

8) Virtual DOM:
Reconciliation Algorithm: Efficiently updates the UI based on state changes.
React Fiber: A reimplementation of React's core algorithm.
Renders: The process of updating the virtual DOM.
Diff algorithm: Compares the previous and current state to determine changes.
How does render work?: Updating the UI based on virtual DOM changes.

9) SSR vs CSR (important):
What?: Server-Side Rendering vs. Client-Side Rendering.
Difference: Where rendering occurs - server or client.
SEO and performance (SSR): Improved search engine optimization and initial load speed.

10) Routing (Role-based access control-RBAC):
react-router: Library for handling navigation in React applications.
How do you manage protected routes?: Utilize authentication and authorization checks.
How do you handle routes?: Define routes and components for navigation.
Query params: Additional information passed in the URL.
Dynamic routing: Creating routes dynamically based on data.

11) Testing:
React Testing Library: Testing library for React applications.
Unit Testing: Testing individual units of code.
Hack for interview: Emphasize writing testable code and demonstrate test cases.

12) Async Tasks:
API Calls: Fetching data from external sources.
useEffect in depth: Managing side effects, including async operations.
Events: Handling asynchronous events.
Promises: A pattern for handling asynchronous operations.
setTimeout: Delaying the execution of code.

13) Reusability, Readability, modularity, testability (Coding Practices):

14) Performance:
Lazy loading: Loading resources only when needed.
Asset optimization: Minifying and compressing JS/CSS code.
Writing optimized code: Following best practices for efficient code.
Bundler: Tools like Webpack to bundle and optimize code.
CDN / Server level: Distributing assets for faster loading.
Rendering of components: Optimizing rendering for better performance.

15) Styling:
Tailwind, StyleX, Bootstrap, Material UI, Ant UI, CSS / SCSS: Different styling approaches and libraries.







