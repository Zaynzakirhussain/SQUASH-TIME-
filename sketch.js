var ball,img,paddle,gameState,baseline,topline,mid,baseline1,paddle1,cs,ps;
function preload() {
  /* preload your images here of the ball and the paddle */
  ball = loadImage("ball.png");
  paddle = loadImage("paddle.png");
}
function setup() {
  createCanvas(400,400);
   /* create bal Ball Sprite and the Paddle Sprite */
  ball = createSprite(200,200,11,11); 

  /* assign the images to the sprites */
  paddle = createSprite(350,355,61,9);
  paddle1= createSprite(150,355,61,9);
  /* give the ball an initial velocity of 9 in the X direction */
  PLAY = 1
  OVER = 0
  gameState = PLAY;
  baseline = createSprite(100,390,200,25);
  baseline1= createSprite(300,390,200,25);
  topline = createSprite(200,-2,400,25); 
  mid = createSprite(200,200,3,400);
}

function draw() {
  background("yellow");
  /* create Edge Sprites here */
  edges= createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
 if(gameState === PLAY){
   text("Press space to start",150,170);
   if(keyDown("space")){
    ball.velocityY = 5.5;
    ball.velocityX = random(4.5,-4.5);
   }   
  paddle.velocityX = 0;
  paddle.collide(edges);
  paddle.collide(mid);
  paddle1.velocityX = 0;
  paddle1.collide(edges);
  paddle1.collide(mid);
  ball.bounceOff(edges);
  //ll.collide(baseline);
 //all.collide(baseline1);
  //ll.bounceOff(topline);
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  text("player1 use A and D to play",25,30);
  text("player2 use arrows to play",230,30);

  if(keyDown(LEFT_ARROW)){
    paddle.velocityX = -6;
  }
  
  if(keyDown(RIGHT_ARROW)){
   paddle.velocityX = 6;
  }
  if(ball.isTouching(paddle)) {
//ball.velocityY = 0;
  ball.bounceOff(paddle);
  }
 
  
  if(keyDown("a")){
    paddle1.velocityX = -6;
  }
  
  if(keyDown("d")){
   paddle1.velocityX = 6;
  }
  if(ball.isTouching(paddle1)) {
  ball.bounceOff(paddle1);
  } 
  if(ball.isTouching(baseline)){
    gameState = OVER;
  } 
  if(ball.isTouching(baseline1)){
    gameState = OVER;
  }    
 }

  if(gameState === OVER){
    text("GAME OVER!",162,50);
    text("Press r to restart",150,170);
    if(ball.isTouching(baseline)){
   //ameState = OVER;
    text("player2 wins",260,150);
    ball.x = 100;
    ball.y = 390;
  } 
  if(ball.isTouching(baseline1)){
   //ameState = OVER;
    text("player1 wins",45,150);
    ball.x = 300;
    ball.y = 390;
    if(keyDown("r")){
      gameState = PLAY;
      ball.x = 200;
      ball.y = 200;
    }
  } 
  
  } 
  drawSprites();

}



