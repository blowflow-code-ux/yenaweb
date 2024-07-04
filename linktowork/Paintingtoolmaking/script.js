// let canvas = document.getElementById("canvas");
// const context = canvas.getContext("2d");

// canvas.width = 1000;
// canvas.height = 1000;

// context.strokeStyle = "black";
// context.lineWidth = 2.5; 
 
// let painting = false;

// function onMouseMove(event){
//     const x = event.offsetX;
//     const y = event.offsetY;
//     // console.log(x,y);
//     if(!painting){
//         context.beginPath();
//         context.moveTo(x, y);
//     } else {
//         context.lineTo(x, y);
//         context.stroke();
//     }
// }

// function onMouseDown(event){
//     painting = true;
// }

// function onMouseUp(event){
//     painting = false;
// }

// function onMouseLeave(event){
//     painting = false;
// }

// if(canvas){
//     canvas.addEventListener("mousemove", onMouseMove);
//     canvas.addEventListener("mousedown", onMouseDown);
//     canvas.addEventListener("mouseup", onMouseUp);
//     canvas.addEventListener("mouseleave", onMouseLeave);
// }

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

let count = 100;
let count2 = 10;
let counter = 0;

let backgroundColor = "hsl(" + count2 + ",80% ,80%)";
let backgroundColor2 = "hsl(" + count2 + ",60% ,60%)";

let shape = 1;
let colourful = 1;


document.onmousemove = function (event) {
    let gradation1 = document.createElement("div")

    
    if(colourful ==  1){
        backgroundColor = "hsl(" + count2 + ",80% ,80%)";
        backgroundColor2 = "hsl(" + count2 + ",60% ,60%)";
    }

    gradation1.className = "gradation1";
    gradation1.style.backgroundColor = backgroundColor;
    gradation1.style.height = "50px";
    gradation1.style.width = "50px";
    gradation1.style.borderRadius = "50%";
    gradation1.style.position = "absolute";
    gradation1.style.left = event.clientX + "px";
    gradation1.style.top = event.clientY + "px";

    let gradation2 = document.createElement("div")
    gradation2.classname = "gradation2";
    gradation2.style.backgroundColor = backgroundColor2;
    gradation2.style.height = "60px";
    gradation2.style.width = "60px";
    gradation2.style.borderRadius = "50%";
    gradation2.style.position = "absolute";
    gradation2.style.left = event.clientX + "px";
    gradation2.style.top = event.clientY + "px";

    let bg = "linear-gradient(to top right, hsl(" + event.clientY / 10 + ", 60%, 60%) " + event.clientY / 50 + "%, #f0f0f0)";
    document.body.style.backgroundImage = bg;

    count2 = count2 + 2;
    count = count * 0.5;

    canvas.appendChild(gradation1);
    canvas.appendChild(gradation2);
}


document.onmousedown = function (event) {
    let dot1 = document.createElement("div");

    dot1.className = "dot1";
    dot1.style.position = "absolute";
    dot1.style.left = Math.floor(Math.random() * event.clientX) + "px";
    dot1.style.top = Math.floor(Math.random() * event.clientY) + "px";
    dot1.style.width = count2 + "px";
    dot1.style.height = count2 + "px";

    let skew1 = document.createElement("div");

    skew1.className = "skew1";
    skew1.style.position = "absolute";
    skew1.style.left = Math.floor(Math.random() * event.clientX) + "px";
    skew1.style.top = Math.floor(Math.random() * event.clientY) + "px";
    skew1.style.height = count2 + "px";
    let backgroundColor = "hsl(" + count2 + ",80% ,80%)";
    skew1.style.backgroundColor = backgroundColor;

    count2 = count2 * 0.5;


    canvas.appendChild(dot1);
    canvas.appendChild(skew1);

}

// document.getElementById("close").addEventListener("click", function(){
//     document.getElementById("paletteWrapper").style.display= "none"
// })


document.getElementById("col-lemon").onmousedown = function(event) {
    backgroundColor = "rgb(212, 248, 179)";
    backgroundColor2 = "rgb(212, 248, 179)";
    
    count = 0;
    colourful = 0;
    shape = 0;
    console.log(colourful);
}

document.getElementById("col-green").onmousedown = function(event) {
    backgroundColor = "rgb(0, 255, 170)";
    backgroundColor2 = "rgb(0, 255, 170)";
    count = 0;
    colourful = 0;
}

document.getElementById("col-blue").onmousedown = function(event) {
    backgroundColor = "rgb(58, 106, 207)";
    backgroundColor2 = "rgb(58, 106, 207)";
    count = 0;
    colourful = 0;
}

document.getElementById("col-tealgreen").onmousedown = function(event) {
    backgroundColor = "rgb(139, 166, 170)";
    backgroundColor2 = "rgb(139, 166, 170)";
    count = 0;
    colourful = 0;
}

if(colourful ==  1){
    backgroundColor = "hsl(" + count2 + ",80% ,80%)";
    backgroundColor2 = "hsl(" + count2 + ",60% ,60%)";
}