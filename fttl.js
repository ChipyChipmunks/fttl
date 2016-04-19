
var image_change;
var current_image = 1;
var img_array = new Array();

// Find all the buttons
var buttonOne   = document.querySelector('#home_button');
var buttonTwo   = document.querySelector('#gallery_button');
var buttonThree = document.querySelector('#bookings_button');
var buttonFour  = document.querySelector('#about_button');
var buttonFive  = document.querySelector('#staff_button');
var buttonSix  = document.querySelector('#contact_button');
var buttonSeven  = document.querySelector('#vehicles_button');

// Find all sections
var allSections = document.querySelectorAll('.tab');

// Attach click event listeners to the buttons
home_button.onclick = changeTab;
gallery_button.onclick = changeTab;
bookings_button.onclick = changeTab;
about_button.onclick = changeTab;
staff_button.onclick = changeTab;
contact_button.onclick = changeTab;
vehicles_button.onclick = changeTab;

img_array[0] = "url('resources/images/orange_sunset.JPG')";
img_array[1] = "url('resources/images/Queenstown-evening.JPG')";
img_array[2] = "url('resources/images/Queenstown-aerial-in-winter-dusk.JPG')";
img_array[3] = "url('resources/images/trees.JPG')";

function choose_image() {

    if (current_image == 0) {
    	current_image = 1;
        document.body.style.backgroundImage = img_array[0];
    } else if (current_image == 1){
    	current_image = 2;
        document.body.style.backgroundImage = img_array[1];
    }
    else if (current_image == 2){
    	current_image = 3;
    	document.body.style.backgroundImage = img_array[2];
    }
    else if (current_image == 3){
        current_image = 0;
        document.body.style.backgroundImage = img_array[3];
    }
}

function change_image(){
	choose_image();
}

function changeTab() {

    // Hide all tabs
    for( var i=0; i<allSections.length; i++ ) {
        allSections[i].style.display = 'none';
    }

    // Switch based on the ID of the button clicked
    switch( this.id ) {
        case 'home_button':
            allSections[0].style.display = 'block';
        break;

        case 'gallery_button':
            allSections[1].style.display = 'block';
        break;

        case 'bookings_button':
            allSections[2].style.display = 'block';
        break;

        case 'about_button':
            allSections[3].style.display = 'block';
        break;

        case 'staff_button':
            allSections[4].style.display = 'block';
        break;

        case 'contact_button':
            allSections[5].style.display = 'block';
        break;

        case 'vehicles_button':
            allSections[6].style.display = 'block';
        break;
    }

}