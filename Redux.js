1: What is Redux?

Redux is a state management third-party library for JavaScript applications.
It is widely used to manage and centralize the state of an application,
especially in complex or large-scale applications. 
Redux works on the principle of having a single source of truth (a centralized state store),
making state management predictable and easier to debug.

Redux is a third-party library for JavaScript.

2: Key Concepts of Redux

 **Store**: A single centralized object that holds the entire application state.  
 **Actions**: Plain JavaScript objects that describe what to do with the state.  
 **Reducers**: Pure functions that determine how the state is updated based on actions.  
 **Dispatch**: A method to send actions to the Redux store for state updates.  
 **State is Read-Only**: The state can only be updated via dispatched actions.  
 **Single Source of Truth**: The entire app’s state is stored in one place.  
 **Middleware**: Functions to extend Redux, often used for handling side effects like API calls.  
 **Predictability**: State updates are consistent and traceable due to the flow of actions and reducers.  

 