let ball_1 = document.getElementById("ball-1");
let ball_2 = document.getElementById("ball-2");
let ball_box = document.getElementById("ball-box");

let Xmax = 500;
let Xmin = 0;
let Ymax = 300;
let Ymin = 0;

let Xmax_2 = Xmax + 50;
let Ymax_2 = Ymax + 50;

const ball_dimension = 100;

ball_box.style.width = Xmax + ball_dimension + "px";
ball_box.style.height = Ymax + ball_dimension +"px"

let positionX_1 = 0;
let positionY_1 = 0;
let velocity_1 = 3;

let positionX_2 = 0;
let positionY_2 = 0;
let velocity_2 = 3;

let reverseX_1 = false;
let reverseY_1 = false;

let reverseX_2 = false;
let reverseY_2 = false;

function ball_1_move() {
    //For x-axis
    if(!reverseX_1 && ((positionX_1 + velocity_1) <= Xmax)) {
        positionX_1 += velocity_1;
        ball_1.style.left = positionX_1 + "px";
    } else if(!reverseX_1 && ((positionX_1 + velocity_1) > Xmax)) {
        reverseX_1 = true;
        positionX_1 -= velocity_1;
        ball_1.style.left = positionX_1 + "px";
        random_color = Math.floor(Math.random()*16777215).toString(16);
        ball_1.style.backgroundColor = "#" + random_color;
    } else if(reverseX_1 && ((positionX_1 - velocity_1) >= Xmin)) {
        positionX_1 -= velocity_1;
        ball_1.style.left = positionX_1 + "px";
    } else if(reverseX_1 && ((positionX_1 - velocity_1) < Xmin)) {
        reverseX_1 = false;
        positionX_1 += velocity_1;
        ball_1.style.left = positionX_1 + "px";
        random_color = Math.floor(Math.random()*16777215).toString(16);
        ball_1.style.backgroundColor = "#" + random_color;
    }

    //For y-axis
    if(!reverseY_1 && ((positionY_1 + velocity_1) <= Ymax)) {
        positionY_1 += velocity_1;
        ball_1.style.top = positionY_1 + "px";
    } else if(!reverseY_1 && ((positionY_1 + velocity_1) > Ymax)) {
        reverseY_1 = true;
        positionY_1 -= velocity_1;
        ball_1.style.top = positionY_1 + "px";
        random_color = Math.floor(Math.random()*16777215).toString(16);
        ball_1.style.backgroundColor = "#" + random_color;
    } else if(reverseY_1 && ((positionY_1 - velocity_1) >= Ymin)) {
        positionY_1 -= velocity_1;
        ball_1.style.top = positionY_1 + "px";
    } else if(reverseY_1 && ((positionY_1 - velocity_1) < Ymin)) {
        reverseY_1 = false;
        positionY_1 += velocity_1;
        ball_1.style.top = positionY_1 + "px";
        random_color = Math.floor(Math.random()*16777215).toString(16);
        ball_1.style.backgroundColor = "#" + random_color;
    } 
}

function ball_2_move() {
    //For x-axis
    if(!reverseX_2 && ((positionX_2 + velocity_2) <= Xmax_2)) {
        positionX_2 += velocity_2;
        ball_2.style.left = positionX_2 + "px";
    } else if(!reverseX_2 && ((positionX_2 + velocity_2) > Xmax_2)) {
        reverseX_2 = true;
        positionX_2 -= velocity_2;
        ball_2.style.left = positionX_2 + "px";
        random_color = Math.floor(Math.random()*16777215).toString(16);
        ball_2.style.backgroundColor = "#" + random_color;
    } else if(reverseX_2 && ((positionX_2 - velocity_2) >= Xmin)) {
        positionX_2 -= velocity_2;
        ball_2.style.left = positionX_2 + "px";
    } else if(reverseX_2 && ((positionX_2 - velocity_2) < Xmin)) {
        reverseX_2 = false;
        positionX_2 += velocity_2;
        ball_2.style.left = positionX_2 + "px";
        random_color = Math.floor(Math.random()*16777215).toString(16);
        ball_2.style.backgroundColor = "#" + random_color;
    }

    //For y-axis
    if(!reverseY_2 && ((positionY_2 + velocity_2) <= Ymax_2)) {
        positionY_2 += velocity_2;
        ball_2.style.top = positionY_2 + "px";
    } else if(!reverseY_2 && ((positionY_2 + velocity_2) > Ymax_2)) {
        reverseY_2 = true;
        positionY_2 -= velocity_2;
        ball_2.style.top = positionY_2 + "px";
        random_color = Math.floor(Math.random()*16777215).toString(16);
        ball_2.style.backgroundColor = "#" + random_color;
    } else if(reverseY_2 && ((positionY_2 - velocity_2) >= Ymin)) {
        positionY_2 -= velocity_2;
        ball_2.style.top = positionY_2 + "px";
    } else if(reverseY_2 && ((positionY_2 - velocity_2) < Ymin)) {
        reverseY_2 = false;
        positionY_2 += velocity_2;
        ball_2.style.top = positionY_2 + "px";
        random_color = Math.floor(Math.random()*16777215).toString(16);
        ball_2.style.backgroundColor = "#" + random_color;
    }
}

//Set ball 1 move interval for 10ms
setInterval(ball_1_move, 10);
setInterval(ball_2_move, 5);