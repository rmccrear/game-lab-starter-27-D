//SHOWBOARDS
function showBoards() {
  showScore()
}

function showScore() {
    fill(255, 255, 255);
    textSize(16);
    textAlign(LEFT, TOP)
    text("Score: " + score, 10, 20);
}