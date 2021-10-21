var car ;
var wall ;
 
var speed ;
var weight ;

functon setup  () {
  createCanvas (1600,400);
    
  createSprite (400,200,50,50);

    car = createSprite (50,200,50,50);
    car.velocity.x = speed ;
    car.shapeColour = colour (255);


    wall = createSprite (1500 ,200 ,60 ,height/2 );
    wall.shapeColour  = colour (90,90,90);

    speed = random (55 ,90 )
    weight = random (1500 , 400 );
}

function draw () {
  background (0);

   if (wall.x - car.x < ( wall.width + car.width )/2 ) {

    car.velocity.x = 0;
     car = deformation = 0.5 * weight * speed * speed / 22500;
     
     if (deformatiom > 180 ) {
       car.shapeColour = colour (255 , 0 , 0 );
     }  

     if (deformation < 180 & deformation > 100  )
      car.shapeColour = colour (230 ,230 ,0 );
   }

     if ( deformaton < 100 ) {
       car.shapeColour = colour (0, 255 ,0 );
     }


  drawSprite ();

}