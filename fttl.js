
var image_change;
var current_image = 1;
var img_array = new Array();

img_array[0] = "url('resources/orange_sunset.JPG')";
img_array[1] = "url('resources/Queenstown-evening.JPG')";
img_array[2] = "url('resources/Queenstown-aerial-in-winter-dusk.JPG')";
img_array[3] = "url('resources/trees.JPG')";

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
    change_image();
}

function change_image(){
	image_change = setTimeout(choose_image, 2500);
}