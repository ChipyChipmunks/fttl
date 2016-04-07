
var image_change;
var current_image = 0;
var img_array = new Array();

img_array[0] = 'resources/orange_sunset.JPG';
img_array[1] = 'resources/Queenstown_winter_aerial';
img_array[2] = 'resources/Queenstown-aerial-in-winter-dusk.JPG';

function choose_image() {
    var image = document.getElementsByTagName('html')[0].style.backgroundImage;
    console.log(document.getElementsByTagName('html')[0].style.backgroundImage);


    if (current_image == 0) {
    	current_image = 1;
        image.src = img_array[1];
    } else if (current_image == 1){
    	current_image = 2;
        image.src = img_array[2];
    }
    else if (current_image == 2){
    	current_image = 0;
    	image.src = img_array[0];
    }
    change_image();
}

function change_image(){
	image_change = setTimeout(choose_image, 2500);