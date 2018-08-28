## Component Functionality
### App Component
- [X] renders no todos items when there is no todo props
- [X] renders a list of todos items when there is todo props 
### Input Component 
- [X] renders to screen
- [X] renders an input box with a submit button to the screen
- [X] can enter text into the input 
- [X] when the user enters text the input state updates 
### Todo Item 
- [X] the todo item has a name prop (string )and a completed prop (boolean)
- [X] when edit mode is false:
    - [X] the read mode todo list renders 
    - [X] when the read mode appears, the edit button and delete button appear on mouseover and disappear on mouseout
    - [X] when the "edit" button is clicked, the read mode switches to edit mode 
    - [ ] when the "delete" button is clicked, the item is removed from the screen and the state
    - [ ] when the user clicks on the todo item it is crossed out 
- [ ] when the edit mode is true: 
    - [X] the edit mode renders - an input, a save button, and a cancel button 
    - [ ] when the save button is clicked without any text or is the same as before nothing happens
    - [X] when the cancel button is clicked in the edit mode todo component, the todo component goes back to "read mode"
### Integration Tests
- [ ] a new todo list is rendered to the app component when the submit button is clicked in the input component
- [ ] when the save button is clicked with text, the todo with the edited text, the state is updated in the app copmponent.










