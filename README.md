# To Do list with localStorage

This is a personal coding project. My goal is to learn about [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API). It's part of my #100DaysOfCode challenge (see days 18–20 in [my log, here](https://github.com/macloo/100-days-of-code/blob/master/log.md)).

**Step 1** was to make a form so the user can enter data into the To Do list.

**Step 2** I had to figure out how localStorage works. A pretty important thing to note is that "localStorage (at the current time) cannot hold any data type except for *strings*. You will need to serialize the array for storage and then parse it back out to make modifications to it." ([source](http://stackoverflow.com/questions/16083919/push-json-objects-to-array-in-localstorage))

So I have to `JSON.stringify()` to write the list into localStorage. But when I get it out again, I have to use `JSON.parse(localStorage.getItem('toDoList'));`

**Step 3** With localStorage working, I then needed to hide/show things using jQuery. Since this is a single-page app, I check if you have a To Do list in localStorage already. If not, you see the form to enter your first item. If you do have it already, I hide the form and show you your list. I experimented with several Bootstrap styles for the list items.

I also check whether your browser has localStorage at all. If not, I hide both the form and the list from you and post a message.

### Jan. 30

~~Dang, I have a persistent bug that I swear was not there yesterday. Duplicates of To Do items, and also disappearing To Do items.~~

I think I've fixed it. Moved `var toDoItem = new Object();` down into the `getFormData()` function and that seems to have done the trick.

### Jan. 29

App now reads and writes perfectly to/from localStorage. Remaining things to do:

* Add a "remove" checkbox to each item.
* Add options to reorder the list items by either priority or due date.
* Fix bug for first use when there is no localStorage key - it kills your first item and doubles the second item. Wha—?

### Jan. 28

I had some trouble with handling the array of objects correctly. At first I was writing arrays into arrays. That was because I had:

`myArray.push( JSON.parse( localStorage.getItem('maclooToDoList') ) );`

Where what I actually needed was:

`myArray = JSON.parse( localStorage.getItem('maclooToDoList') );`

That is the one place where I retrieve the data from localStorage. I write it out to localStorage every time the form is submitted, in case the user closes the browser then, but I only have to read it once — when the JS runs the first time after `$(document).ready()`
