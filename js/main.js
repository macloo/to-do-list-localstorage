$( document ).ready( function() {

/* check if browser has localStorage */
if ( storageAvailable('localStorage') ) {
    alert("Ready!");
} else {
    $('.lead').after('<p class="alert alert-danger text-center">Oh, no!' +
    ' Your browser does not support local storage!</p>');
    $('#newItemForm').hide();
}

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

/* check if toDoList exists */
if( !localStorage.getItem('toDoList') ) {
    $('.lead').after('<p class="alert alert-success text-center">You' +
        ' don\'t have a To Do list on this device. Use the form to create' +
        ' your first item.</p>');
} else {
    $('#newItemForm').hide();
    writeOutToDoList();
}

function writeOutToDoList(){
    // stuff to write list
}

function getFormData() {
    // get text from input fields
    var newItem     = $('#itemname').val();
    var newDescrip  = $('#duedate').val();
    var newDate     = $('#descrip').val();
    var newPriority = $('#priority').val();

    // clear input fields
    $('#itemname').val("");
    $('#duedate').val("");
    $('#descrip').val("");
    $('#priority').val("");

    console.log(newItem + " " + newDescrip + " " + newDate + " " + newPriority);

    // will have to construct object: completeList
    // localStorage.setItem(x, x);
    // localStorage.setItem( 'toDoList', JSON.stringify(completeList) );
}

}); // end document ready
