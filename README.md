## Component Functionality
### App Component
- [X] renders no todos items when there is no todo props
- [X] renders a list of todos items when there is todo props 
### Input Component 
- [X] renders to screen
- [X] renders an input box with a submit button to the screen
- [X] can enter text into the input 
- [X] when the user enters text the input state updates 
- [ ] when the user hits submit, the submit event handler is run
### Todo Item 
- [X] the todo item has a name prop (string )and a completed prop (boolean)
- [X] when edit mode is false:
    - [X] the read mode todo list renders 
    - [X] when the read mode appears, the edit button and delete button appear on mouseover and disappear on mouseout
    - [X] when the "edit" button is clicked, the read mode switches to edit mode 
    - [ ] when the user clicks on the todo item it is crossed out 
- [ ] when the edit mode is true: 
    - [X] the edit mode renders - an input, a save button, and a cancel button 
    - [ ] when the save button is clicked without any text or is the same as before nothing happens
    - [X] when the cancel button is clicked in the edit mode todo component, the todo component goes back to "read mode"
### Overall
- [X] when the user clicks submit, a new todo is rendered to the screen
- [ ] when the user saves an edited text, the edited text replaces the old text
- [ ] when the "delete" button is clicked, the item is removed from the application and the state










