const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var bg="sunrise1.png" ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    fill("black")
    textSize(40)
    console.log('up hour',hour);
    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
       }else if(hour==0){
         text("Time : 12 AM",100,100);
       }else{
        text("Time : "+ hour%12 + " AM", 50,100);
       }
    
    // add condition to check if any background image is there to add


   

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);
    console.log('hourr',hour);
    
    if(hour>=04&& hour<=06){
       
        bg = "sunrise1.png";
    }
    else if(hour>=06&&hour<=08){
       
        bg = "sunrise2.png";
    }else if(hour>=08&&hour<=09){
        
        bg = "sunrise3.png";
    }else if(hour>=09&&hour<=10){
       
        bg = "sunrise4.png";
    }else if(hour>=10&&hour<=11){
      
        bg = "sunrise5.png";
    }else if(hour>=11&&hour<=12){
        
        bg = "sunrise4.png";
    }else if(hour>=12&&hour<=13){
        
        bg = "sunrise5.png";
    }else if(hour>=13&&hour<=14){
        bg = "sunrise5.png";
    }else if(hour>=15&&hour<=16){
        
        bg = "sunrise6.png";
    }else if(hour>=16&&hour<=17){
       
        bg = "sunset8.png";
    }else if(hour>=17&&hour<=18){
      
        bg = "sunset9.png";
    }else if(hour>=18&&hour<=19){
      
        bg = "sunset10.png";
    }else if(hour>=19&&hour<=20){
        
        bg = "sunset11.png";
    }else if(hour>=20&&hour<=21){
  
        bg = "sunset8.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}