
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup,ground;
var score;

function preload(){
  
   
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  
  monkey = createSprite(50,180,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
   
  ground = createSprite(400,350,900,10);
  ground.velocityX  = -4;
  ground.x=ground.width/2;
  
  FoodGroup = createGroup();
  obstacleGroup=createGroup();
  
  score = 0;
}


function draw() {
background(255);
  
  //displaying score
  stroke("black");
  textSize(20);
  fill("black");
  score = score + Math.round(getFrameRate()/60);
  text("Survival Time: "+ score, 200,50); 
  
      if (ground.x<0){
          ground.x = ground.width/2;
      }
     
      if(keyDown("space")&& monkey.y >= 200) {
          monkey.velocityY = -12;
      }
  
        monkey.velocityY = monkey.velocityY + 0.8;

        monkey.collide(ground);
    
        //calling the bananas and obstacles group
        spawnBanana();
        spawnObstacles();
  
  drawSprites();
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //adding cloud to the group
    FoodGroup.add(banana);
    }
}

function spawnObstacles(){
     if (frameCount % 300 === 0){
        var obstacle = createSprite(300,315,10,40);
        obstacle.velocityX = -6;

        //generate random obstacles
        var rand = Math.round(random(120,200));

        obstacle.addImage(obstaceImage);

        //assign scale and lifetime to the obstacle           
        obstacle.scale = 0.2;
        obstacle.lifetime = 50;

        //add each obstacle to the group
        obstacleGroup.add(obstacle);
     }
}





