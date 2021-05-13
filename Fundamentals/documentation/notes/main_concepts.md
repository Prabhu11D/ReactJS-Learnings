# Main Concepts

## JSX Introduction
* JSX = JavaScript + XML
* Embedding Expression in JSX
* JSX is an Expression Too
* Specifying Attributes in JSX
* self closing tag
* JSX prevents injection attacks
* JSX Represents Object 
  * babel compiles to objects like React Elements

## Rendering Elements
* React Elements are Objects
* it efficiently updates the DOM

## Components and Props
* Components let you split the UI into independent, reusable pieces, and think about each piece in isolation
* Component First Letter must be UpperCase
* Composing Components
  * components called another components to produce output
* Extracting Components
  * split the code for reuseable components
* Props are Read-Only
  * pure functions
    * cannot write value to input parameters
  * impure functions
    * write value to input parameters

## State and LifeCycle
* state is a private data for component, and it can be modified with the help of setState method.
* componentDidMount() will run after UI is rendered.
* componentWillUnmount() will run after the component is removed from DOM.
* Using State Correctly
  * Do Not modify state directly
  * State update may be Asynchronous
  * State Updates are Merged
    * it copies shallowlly
* The Data flows Down

## Handling Events
* when using normal methods in class use method.bind(this)
* passing Aarguments to Event Handlers

## Conditional Rendering
* you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.
* using if or ternary operator
* Store JSX in Environment Variable
* Inline If with Logical && Operator
* Inline If-Else with Conditional Operator
* Preventing Component from Rendering
  * just return null

## Lists and Keys
* Keys Must Only Be Unique Among Siblings

## Forms
* HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state
* An input form element whose value is controlled by React in this way is called a “controlled component”
* The textarea Tag
  * uses value attribute
* select Tag
  * selected attribute is replaced by value attribute in select tag
* The file input tag
  * it is read only so it is called "uncontrolled component"
* Handling Multiple Inputs
  * When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name

## Lifting State Up
* There should be a single “source of truth” for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow

## Composition vs Inheritance
  
## Thinking in React
* Step 1: Break The UI Into A Component Hierarchy
* Step 2: Build A Static Version in React
* Step 3: Identify The Minimal (but complete) Representation Of UI State
* Step 4: Identify Where Your State Should Live
* Step 5: Add Inverse Data Flow