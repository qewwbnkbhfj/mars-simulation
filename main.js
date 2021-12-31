canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

nasa_mars_images_array=["mars_IMG 1.jpg","mars_IMG 2.jpg","mars_IMG 3.jpg","mars_IMG 4.jpg"];

random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=100;
rover_height=90;

background_image=nasa_mars_images_array[random_number];
console.log("background Image=" + background_image);
rover_img="rover.png";

rover_x=10;
rover_y=10;

function add(){
    background_tagimg=new Image();
    background_tagimg.onload=uploadBackground;
    background_tagimg.src=background_image;

    rover_tagimg=new Image();
    rover_tagimg.onload=uploadRover;
    rover_tagimg.src=rover_img;
}

function uploadBackground(){
    ctx.drawImage(background_tagimg,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_tagimg,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    Keypressed=e.keyCode;
    console.log(Keypressed);
    if(Keypressed=="38"){
        up();
        console.log("up");
       
    }

    if(Keypressed=="39"){
        right();
        console.log("right");
    }

    if(Keypressed=="37"){
        left();
        console.log("left");
    }

    if(Keypressed=="40"){
        down();
        console.log("down");
    }
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow is press, x=" + rover_x + "y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}


function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when up arrow is press, x=" + rover_x + "y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}


function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when up arrow is press, x=" + rover_x + "y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}


function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when up arrow is press, x=" + rover_x + "y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}