var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database,position;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if (position ==! undefined){
    if(keyDown(LEFT_ARROW)){
      balloon.addAnimation("hotAirBalloon1",balloonImage2);
      updateHeight(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      balloon.addAnimation("hotAirBalloon2",balloonImage2);
      updateHeight(1,0);
    }
    else if(keyDown(UP_ARROW)){
      balloon.addAnimation("hotAirBalloon3",balloonImage2);
      updateHeight(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      balloon.addAnimation("hotAirBalloon1",balloonImage2);
      updateHeight(0,1);
    }
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function updateHeight(x,y){
  database.ref("hotAirBallon/position").set({
      'x': position.x + x,
      'y': position.y + y
  });
}

function readPosition(data){
  position = data.val();
  hotAirBalloon.x = position.x;
  hotAirBalloon.y = position.y;
}

