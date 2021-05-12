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
