difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll :
                * getElementById is used to select a single element by its id.It also returns a single element .

                * getElementsByClassName is used to selects all elements with a given class name And returns HTMLCollection.
               
                * querySelector is used to select the first element that matches a CSS selector and returns a single element
                 
                * querySelectorAll is used to selects all elements matching a CSS selector and returns a NodeList.


document.createElement() is used to create a new HTML element. ANd appendChild() is used to insert into an existing element that is already part of the DOM.


Event bubbling works when an event happens on an element and then moves up to its parent,to parent's parent, and so on.


Event delegation works when one event listener is added to a parent element instead of many listeners to each child.


Difference between preventDefault() and stopPropagation():

                * preventDefault() stops the browser’s default action.
                * stopPropagation() stops the event from bubbling up to parent elements.