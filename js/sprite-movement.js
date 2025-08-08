//MOVEMENT CODE
function doSpriteMovement() {
    // Example Code follows.
    // Please delete and replace with your own code.
if(star.y > 420)
    {star.y =-20;};

if(star2.y >420) 
    {star2.y =-20;};

if(platform.y > 410)
    {platform.y = -20;};

if(platform2.y > 410)
    {platform2.y = -20;}


    // Reset player when it falls off screen
    if (player.y > 400) {
        player.y = 200; // Reset to middle of screen
        player.x = 200; // Reset to middle of screen
    }
    
    // Your existing star respawn code...
    if (star.y > 400) {
        star.y = 0;
        star.x = randomNumber(0, 400);
    }
    if (star2.y > 400) {
        star2.y = 0;
        star2.x = randomNumber(0, 400);
    }
}
