$( document ).ready( function() {

var toDoItem = new Object();
var myArray = [];
var storageKey = 'maclooToDoList';

if ( storageAvailable('localStorage') ) {
    /* check if toDoList exists - if not, keep form visible */
    if( !localStorage.getItem(storageKey) ) {
        $('.lead').after('<p class="alert alert-success text-center">You' +
            ' don\'t have a To Do list on this device. Use the form to create' +
            ' your first item.</p>');
        $('#paraToHideForm').hide();
        $('#toDoDataRow').hide();

    /* if toDoList does exist -- */
    } else {
        $('#newItemForm').hide();
        // get localStorage string, parse into objects, replace array
        myArray = JSON.parse( localStorage.getItem(storageKey) );
        // write array contents to page
        writeOutToDoList();
    }
/* if there is not localStorage */
} else {
    $('.lead').after('<p class="alert alert-danger text-center">Oh, no!' +
    ' Your browser does not support local storage!</p>');
    $('#newItemForm').hide();
    $('#toDoDataRow').hide();
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

// listen for form submit event
$('#newItemForm').submit(function(e) {
    e.preventDefault();
    getFormData();
});

// listen for link click
$('#hideForm').click(function(e) {
    e.preventDefault();
    $('#newItemForm').hide();
    writeOutToDoList();
});

// listen for link click
$('#showForm').click(function(e) {
    e.preventDefault();
    $('#newItemForm').show();
    $('#toDoDataRow').hide();
});

function writeOutToDoList() {
    var string = "";
    for (var i = 0; i < myArray.length; i++) {
        var itemname = myArray[i].name;
        var descrip = myArray[i].descrip;
        var duedate = myArray[i].date;
        var designate = setPriority(myArray[i].priority);
        var itemstring = '<div class="panel panel-default">' +
            '<div class="panel-body">' + '<span class="label label-' +
             designate[0] + '">' + designate[1] + '</span> ' +
            itemname + ' &mdash; ' + descrip +
            '</div><div class="panel-footer">DUE: ' +
            duedate + '</div></div>';
        var remove = '';
        string += itemstring;
    }
    $('#toDoDataRow').show();
    $('#toDoData').html("").append(string);
}

function setPriority(priority) {
    var designate, level;
    if (priority == 1) {
        designate = "danger";
        level = "Highest";
    } else if (priority == 2) {
        designate = "warning";
        level = "High";
    } else if (priority == 3) {
        designate = "success";
        level = "Medium";
    } else if (priority == 4) {
        designate = "info";
        level = "Low";
    } else {
        designate = "primary";
        level = "Lowest";
    }
    return [designate, level];
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

    // assign object properties
    toDoItem.name = newItem;
    toDoItem.descrip = newDescrip;
    toDoItem.date = newDate;
    toDoItem.priority = newPriority;

    // add the new item to the array
    myArray.push(toDoItem);

    // write it out to localStorage right away
    localStorage.setItem( storageKey, JSON.stringify(myArray) );

    // after writing, hide form and show all items
    $('#toDoDataRow').show();
    writeOutToDoList();
    $('#newItemForm').hide();
}

}); // end document ready
