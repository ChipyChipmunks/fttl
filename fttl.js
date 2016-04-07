
var image_change;
var current_image = 0;
var img_array = new Array();

img_array[0] = new Image(); 
img_array[1] = new Image(); 
img_array[2] = new Image(); 

img_array[0] = "url('resources/orange_sunset.JPG')";
img_array[1] = "url('resources/Queenstown_winter_aerial.JPG')";
img_array[2] = "url('resources/Queenstown-aerial-in-winter-dusk.JPG')";

function choose_image() {
    if (current_image == 0) {
    	current_image = 1;
        document.body.style.backgroundImage = img_array[current_image];
    } else if (current_image == 1){
    	current_image = 2;
        document.body.style.backgroundImage = img_array[current_image];
    }
    else if (current_image == 2){
    	current_image = 0;
    	document.body.style.backgroundImage = img_array[current_image];
    }
    change_image();
}

function change_image(){
	image_change = setTimeout(choose_image, 2500);
}