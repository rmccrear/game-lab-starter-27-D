
function respondToUser() {
if (keyDown('RIGHT_ARROW')) {
    player.velocityX = 5;
  };
if (keyDown('LEFT_ARROW')) {
    player.velocityX = -5;
  };

if (keyDown('UP_ARROW')) {
    player.velocityY = -5;
  };

if (keyDown('DOWN_ARROW')) {
    player.velocityY = 5;
  };
}
