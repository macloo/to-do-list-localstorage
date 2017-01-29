# To Do list with localStorage

This is a personal coding project. My goal is to learn about [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API).

**Step 1** was to make a form so the user can enter data into the To Do list.

Then I had to figure out how localStorage works. A pretty important thing to note is that "localStorage (at the current time) cannot hold any data type except for *strings*. You will need to serialize the array for storage and then parse it back out to make modifications to it." ([source](http://stackoverflow.com/questions/16083919/push-json-objects-to-array-in-localstorage))

So I have to `JSON.stringify()` to write the list into localStorage. But when I get it out again, I have to use `JSON.parse(localStorage.getItem('toDoList'));`

### Jan. 28

Oops, doing something wrong ...

`[[[{"name":"Brush cat","descrip":"2017-01-30","date":"Prevent hairballs","priority":"2"}],{"name":"Get groceries","descrip":"2017-01-29","date":"Put food in fridge so I don't starve","priority":"4"}],{"name":"Clean the kitchen","descrip":"Because ","date":"2017-02-01","priority":"5"}]`
