$( document ).ready( function() {

var toDoItem = new Object();
var myArray = [];

if ( storageAvailable('localStorage') ) {
    /* check if toDoList exists - if not, keep form visible */
    if( !localStorage.getItem('maclooToDoList') ) {
        $('.lead').after('<p class="alert alert-success text-center">You' +
            ' don\'t have a To Do list on this device. Use the form to create' +
            ' your first item.</p>');
    } else {
        // $('#newItemForm').hide();
        // get localStorage string, parse into objects, put into array
        myArray.push( JSON.parse( localStorage.getItem('maclooToDoList') ) );
        writeOutToDoList();
    }

} else {
    $('.lead').after('<p class="alert alert-danger text-center">Oh, no!' +
    ' Your browser does not support local storage!</p>');
    $('#newItemForm').hide();
}

/* test for existence of localStorage */
function storageAvailable(type) {
	try {
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}

// listen for submit event
$('#newItemForm').submit(function(e) {
    e.preventDefault();
    getFormData();
});

function writeOutToDoList(){
    // myArray already has the objects
    // stuff to write list - loop
}

function getFormData() {
    // get text from input fields
    var newItem     = $('#itemname').val();
    var newDescrip  = $('#descrip').val();
    var newDate     = $('#duedate').val();
    var newPriority = $('#priority').val();

    // clear input fields
    $('#itemname').val("");
    $('#duedate').val("");
    $('#descrip').val("");
    $('#priority').val("");

    console.log(newItem + " " + newDescrip + " " + newDate + " " + newPriority);

    // assign object properties
    toDoItem.name = newItem;
    toDoItem.descrip = newDescrip;
    toDoItem.date = newDate;
    toDoItem.priority = newPriority;

    // add new item to the array
    myArray.push(toDoItem);

    // write it out to localStorage right away
    localStorage.setItem( 'maclooToDoList', JSON.stringify(myArray) );

    // all objects are in the array: myArray is completeList
    // localStorage.setItem(x, x); // name, value
    // localStorage.setItem( 'maclooToDoList', JSON.stringify(completeList) );
}

}); // end document ready
