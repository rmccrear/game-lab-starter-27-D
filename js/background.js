//BACKGROUND CODE
function drawBackground() {
    // Check score and change background color
    if (score >= 10) {
        background('orange');
       
    
    } else {
        background('darkblue');
    }
    background1();
}

function background1() {
    noStroke();
    fill(255, 255, 0); //yellow
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
    ellipse(340, 50, 60, 60);
    fill(20, 20, 150); //darkblue
    ellipse(320, 30, 60, 60);
}