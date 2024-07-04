
function degreesToRadians(a){
    return a * Math.PI / 180;
}
//converts angles from Degrees to Radians

function randomInt(x){
    return Math.floor(Math.random() * x);
}


let canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");
// // set up canvas, set up the resolution by canvas context
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drawing = 0;

// for(let i = 0; i < 20; i++){
//     let x = randomInt(window.innerWidth);
//     let y = randomInt(window.innerHeight);

//     let w = randomInt(500);
//     let h = randomInt(500);

//     ctx.fillStyle = "hsla(" + randomInt(360) + ", 50% , 50%, 50%)";

//     ctx.strokeRect(x, y, w, h);
//     ctx.fillRect(x, y, w, h);
// }

// let drawing = 0;

// document.onmousedown = function(event){
//     drawing = 1;
// }

// document.onmouseup = function(event){
//     drawing = 0;
// }

// document.onmousemove = function(event){
    
//     if(drawing == 1){
//         let x = event.clientX;
//         let y = event.clientY;

//         ctx.fillStyle = "red";
//         ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
//     } 

// }


// let randomBackground = function(){
//     ctx.fillStyle = "hsla(" + randomInt(1000)+",50%,50%,0.5)";
//     ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
// }

// window.setInterval(randomBackground, 0.3);


// 1000ms = 1s

// setTimeout{}


// Canvas VS JS createelements 
// When you draw something on canvas, it's making new pixels .BUT when you draw with createelements in js everytime, it's creating new divs everytime so it becomes so heavy!
 


// rotations

// unlike Css, js moved the coordinate of screen instead of coordinate of element. So that's why you should reset the rotate by resetTransform fuction when you want defalut value to others.
// ctx.resetTransform()
// translate: moves the canvas to somewhere else
// ctx.rotate(degreesToRadians(45));
// ctx.fillRect(-150, -200, 300, 400);

// to center the rectangle in the page, translate x 50% left, translate y 50% down AND let the elements "- half size of the height & width"
// rotation is also inherited . so should reset it if you want to have defalut top-left coordination/



document.onmousemove = function(e){
// ctx.fillStyle="rgba(200, 200, 200, 0.1)";
// ctx.fillRect (0,0,window.innerWidth,window.innerHeight);
if (drawing == 1){
    ctx.beginPath();
    ctx.moveTo(window.innerWidth/2, window.innerHeight/2);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    // ctx.translate(e.clientX/window.innerWidth, e.clientY/window.innerHeight);
};
if (drawing == 1){
ctx.fillStyle="rgba(200, 200, 200, 0.3)";
    ctx.strokeRect(randomInt(2000),randomInt(3000),randomInt(1000),randomInt(1000));

    // ctx.translate(e.clientX/window.innerWidth, e.clientY/window.innerHeight);
};


}

document.onmousedown = function(e){
    ctx.strokeStyle = "hsla(" + randomInt(1000)+",50% , 50%,0.5)";
    drawing = 1;
}

document.onmouseup = function(e){
    drawing = 0;
}


    // document.getElementById("col-lemon").onmousedown = function(event) {
    //     backgroundColor = "rgb(212, 248, 179)";
    //     backgroundColor2 = "rgb(212, 248, 179)";
    //     count = 0;
    //     colourful = 0;
    // }