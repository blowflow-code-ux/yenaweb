

let description = document.getElementsByClassName("descriptions");
let column_2 = document.getElementsByClassName("column2");
let column_3 = document.getElementsByClassName("column3");
let column_4 = document.getElementsByClassName("column4");
let column_5 = document.getElementsByClassName("column5");
let bookCover = document.getElementsByClassName("bookcover")

// function descriptionClick (event) {

//     for (let i = 0; i < column_2.length; i++) {

//         column_2[i].mousedown = function (event) {
    
//             let descriptions = description[i]
//             let column3 = column_3[i]
    
//             if (descriptions.clientHeight > 0) {
//                 description[i].style.height = "0px";
//                 column3[i].style.transform = "translateY(0px)";
//             } else {
//                 description[i].style.height = "400px";
//                 column3[i].style.transform = "translateY(500px)";
    
//             }
//         }
//     }
// }
// descriptionClick();


for (let i = 0; i < column_2.length; i++) {

  column_2[i].mousedown = function (event) {

      let descriptions = description[i]
      let column3 = column_3[i]

      if (descriptions.clientHeight > 0) {
          description[i].style.height = "0px";
          // column3[i].style.transform = "translateY(0px)";
      } else {
          description[i].style.height = "400px";
          // column3[i].style.transform = "translateY(500px)";

      }
  }
}

for (let i = 0; i < bookCover.length; i++) {

  bookCover[i].mousedown = function (event) {
    // let descriptions = description[i]
    bookCover.style.width= "10%";
  }
}

// /하고 싶은것 : column2를 눌렀을때 description 높이가 400으로 커지고 동시에 column3가 500px 아래로 내려감, 다시 누르면 원상태 복귀/ 
// for (let i = 0; i < column_2.length; i++) {

//     column_2[i].onclick = function (event) {

//         let descriptions = description[i]
//         let column3 = column_3[i]

//         if (descriptions.clientHeight > 0) {
//             description[i].style.height = "0px";
//             column3[i].style.transform = "translateY(0px)";
//         } else {
//             description[i].style.height = "400px";
//             column3[i].style.transform = "translateY(500px)";

//         }
//     }
// }

// for (let i = 0; i < column_2.length; i++) {
//     column_2[i].onmousedown = function (event) {

//         let column3 = column_3[i]
//         // let column4 = column_4[i]

//         if (column2.clientHeight > 0) {
//             column3[i].style.transform = "translateY(0px)";
//             // column4[i].style.transform = "translateY(0px)";
//         } else {
//             column3[i].style.transform = "translateY(400px)";
//             // column4[i].style.transform = "translateY(600px)";

//         }
//     }
// }



// Contact-card
const frame = document.getElementById('frame')
const card = document.getElementById('card')
const light = document.getElementById('light')

let { x, y, width, height } = frame.getBoundingClientRect()

function mouseMove(e) {
  const left = e.clientX - x
  const top = e.clientY - y
  const centerX = left - width / 2
  const centerY = top - height / 2
  const d = Math.sqrt(centerX**2 + centerY**2)

  card.style.boxShadow = `
    ${-centerX / 5}px ${-centerY / 10}px 10px rgba(0, 0, 0, 0.2)
  `

  card.style.transform = `
    rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 8}deg)
  `

  light.style.backgroundImage = `
    radial-gradient(circle at ${left}px ${top}px, #00000001, #ffffff11, #ffffff22)
    `
}

frame.addEventListener('mouseenter', () => {
  frame.addEventListener('mousemove', mouseMove)
})

frame.addEventListener('mouseleave', () => {
  frame.removeEventListener('mousemove', mouseMove)
  card.style.boxShadow = ''
  card.style.transform = ''
  light.style.backgroundImage = ''
})

window.addEventListener('resize', () => {
  rect = frame.getBoundingClientRect()
  x = rect.x
  y = rect.y
  width = rect.width
  height = rect.height
})