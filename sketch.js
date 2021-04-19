var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;
 
var particles = [];
var divisions = [];
var plinkos = [];

var particle;

var ground;
var divisions;
var plinkos;

var PLAY = 0;
var END = 1;

var gamestate = PLAY;

var divisionHeight=300;

var score = 0;
var count = 0;

function setup() {

  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;


  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {

     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));

   }

    for (var j = 75; j <=width; j=j+50) {
    
       plinkos.push(new Plinko(j,75));

    }


    for (var j = 50; j <=width-10; j=j+50) {
    
       plinkos.push(new Plinko(j,175));

    }

     for (var j = 75; j <=width; j=j+50) {
    
       plinkos.push(new Plinko(j,275));

    }

     for (var j = 50; j <=width-10; j=j+50) {
    
       plinkos.push(new Plinko(j,375));

    }

}
 


function draw() {

  background("black");

console.log(mouseX);

    fill("navy");
    stroke("indigo");

    text(400 , 25 , 600);
    text(200 , 105 , 600);
    text(900 , 185 , 600);
    text(700 , 265 , 600);
    text(600 , 345 , 600);
    text(1000 , 425 , 600);
    text(500 , 505 , 600);
    text(800 , 585 , 600);
    text(300 , 665 , 600);
    text(100 , 745 , 600);



  textSize(20);
  fill("pink");
  stroke("green");
  text("Score : "+score,20,30);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

  //  if(particle!=null)
  //  {
  //     particle.display();
  //  }

  if(particle!=null)
  {
     particle.display();
      
      if (particle.body.position.y>760)
      {
            if (particle.body.position.x < 80 && particle.body.position.y > 600) 
            {
                score=score+400;
                particle=null;
                //if ( count>= 5) gameState ="end";                          
            }

            else if (particle.body.position.x < 160 && particle.body.position.x > 90 && particle.body.position.y > 600) 
              {
                    score = score + 200;
                    particle=null;
                  //  if ( count>= 5) gameState ="end";

              }

              else if (particle.body.position.x < 240 && particle.body.position.x > 170 && particle.body.position.y > 600 )
              {
                    score = score + 900;
                    particle=null;
                    //if ( count>= 5)  gameState ="end";

              }

              else if (particle.body.position.x < 320 && particle.body.position.x > 250 && particle.body.position.y > 600 )
              {
                    score = score + 700;
                    particle=null;
                    //if ( count>= 5)  gameState ="end";

              }

              else if (particle.body.position.x < 400 && particle.body.position.x > 330 && particle.body.position.y > 600 )
              {
                    score = score + 600;
                    particle=null;
              //       //if ( count>= 5)  gameState ="end";

              }

              else if (particle.body.position.x < 480 && particle.body.position.x > 410 && particle.body.position.y > 600 )
              {
                    score = score + 1000;
                    particle=null;
              //       //if ( count>= 5)  gameState ="end";

              }

              else if (particle.body.position.x < 560 && particle.body.position.x > 490 && particle.body.position.y > 600 )
              {
                    score = score + 500;
                    particle=null;
              //       //if ( count>= 5)  gameState ="end";

              }

              else if (particle.body.position.x < 640 && particle.body.position.x > 570 && particle.body.position.y > 600 )
              {
                    score = score + 800;
                    particle=null;
              //       //if ( count>= 5)  gameState ="end";

              }

              else if (particle.body.position.x < 720 && particle.body.position.x > 650 && particle.body.position.y > 600 )
              {
                    score = score + 300;
                    particle=null;
              //       //if ( count>= 5)  gameState ="end";

              }

              else if (particle.body.position.x < 800 && particle.body.position.x > 730 && particle.body.position.y > 600 )
              {
                    score = score + 100;
                    particle=null;
              //       //if ( count>= 5)  gameState ="end";

              }



          }
        }



   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

   }

   if (count == 5){

    gamestate = END;

   }

   if(gamestate ==  END) {

    fill("blue");
    stroke("indigo");
    strokeWeight(10);
    textSize(80);
    text("GAME" + " " + "OVER" , 200 , 400);

   }  

  //  if (particle.x < 30 && particle.x >0) 
  //  {
  //      score=score+400;      
  //      particle=null;
  //      turn = turn+1;                         
  //  }

}

function mousePressed(){
  
  if(gamestate!=="end"){

    count = count+1;
    particle = new Particle(mouseX, 10, 10, 10); 

  }  

} 