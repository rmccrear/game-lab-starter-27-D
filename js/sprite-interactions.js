// PLAYER INTERACTIONS
function doSpriteInteraction() {
    // Example Code follows.
   
    player.collide(platform);
    player.collide(platform2);
    if (player.isTouching(star)) {
        score += 1;
        star.y = 0; // Reset to top
        star.x = randomNumber(0, 400); // Random x position

        
    }
 if (player.isTouching(star2)) {
        score += 1;
        star2.y = 0; // Reset to top  
        star2.x = randomNumber(0, 400); // Random x position

    }
}