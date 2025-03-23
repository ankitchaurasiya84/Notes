Q1: Impliment counter Incriment and decriment 
Q2: why we need react JS over JS? Component-Based Architecture , . Virtual DOM , State Management, JSX Syntax,  Cross-Platform Development
Q3: what is concept of state? : In React.js, state refers to an object that holds dynamic data that determine the behavior or rendering of a component. 
	It is one of the key concepts in React for handling changing data in an application.
 Q4: Can you explain the concept of virtual DOM in React and how it differs from the real DOM?
 Q5:Describe the lifecycle methods of a React component. Can you name a few commonly used ones?
 Q6: What are props in React? How do they differ from state?
 Q7:How would you manage global application state in a React application?
 Q8: Have you implemented any React hooks? If so, can you describe the useState and useEffect hooks?
 Q9:Can you provide an example of how you've optimized a React application for performance?
 Q10: Explain what JSX is and why it is used in React
 Q11:What are the benefits of using functional components over class components in React?
 Q12:How do you handle form validation in a React application?
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

 /Users/ankitchaurasiya/Documents/JS/React question.js
