
function setupSprites() {
  // Example Code follows.
  // Please delete and replace with your own code.
  player = createSprite(200, 200, 50, 50);
  player.addAnimation('fly', alienAnimation);
  player.height = 50;
  player.width = 50;
  player.velocityY =0;

  //stars spawning

  star = createSprite(100, 0, 50, 50);
  star.shapeColor = "aqua";
  star.addAnimation('twinkle', starAnimation);
  star.velocityX = 0;
  star.velocityY = randomNumber(1,3);
  star.height = 30;
  star.width = 30;

  star2 = createSprite(300, 0, 50, 50);
  star2.shapeColor = "aqua";
  star2.addAnimation('twinkle', starAnimation);
  star2.velocityX = 0;
  star2.velocityY = randomNumber(1,3);
  star2.height = 30;
  star2.width = 30;

  //platforms spawning
  platform =createSprite (100,100,50,50);
  platform.addAnimation('fly',platformAnimation);
  platform.velocityX =0;
  platform.velocityY =randomNumber(1,3);

  platform2 =createSprite (200,100,50,50);
  platform2.addAnimation('fly',platformAnimation);
  platform2.velocityX =0;
  platform2.velocityY =randomNumber(1,3);
}    