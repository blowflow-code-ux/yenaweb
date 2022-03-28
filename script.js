let description = document.getElementsByClassName("descriptions");
let column_2 = document.getElementsByClassName("column2");
let column_3 = document.getElementsByClassName("column3");
let column_4 = document.getElementsByClassName("column4");
let column_5 = document.getElementsByClassName("column5");
let bookCover = document.getElementsByClassName("bookcover");

//index.html varriables
const index1 = document.querySelector("#index1_works");
const index2 = document.querySelector("#index2_about");
const index3 = document.querySelector("#index3_contact");

// work1.html toggle varriables
const column2_mfhp = document.querySelector("#column2_MFHP");
const column3_epm = document.querySelector("#column3_EPM");
const column4_fcc = document.querySelector("#column4_FCC");
const column5_scc = document.querySelector("#column5_SCC");
const des_mfhp = document.querySelector("#mfhp_description");
const des_epm = document.querySelector("#epm_description");
const des_fcc = document.querySelector("#fcc_description");
const des_scc = document.querySelector("#scc_description");

// toggle contents function
const toggleContents = (item) => {
	if (item.style.height < "50vh") {
		item.style.height = "50vh";
	} else {
		item.style.height = null;
	}
};

// apply functions
column2_mfhp.addEventListener("click", () => {
	toggleContents(column2_mfhp);
});
column3_epm.addEventListener("click", () => {
	toggleContents(column3_epm);
});
column4_fcc.addEventListener("click", () => {
	toggleContents(column4_fcc);
});
column5_scc.addEventListener("click", () => {
	toggleContents(column5_scc);
});

function onClickIndex3() {
	location.href = "./contact.html";
}

function onHoverIndex3() {
	index3.style.AnimationName;
}

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
		let descriptions = description[i];
		let column3 = column_3[i];

		if (descriptions.clientHeight > 0) {
			description[i].style.height = "0px";
			// column3[i].style.transform = "translateY(0px)";
		} else {
			description[i].style.height = "400px";
			// column3[i].style.transform = "translateY(500px)";
		}
	};
}

for (let i = 0; i < bookCover.length; i++) {
	bookCover[i].mousedown = function (event) {
		// let descriptions = description[i]
		bookCover.style.width = "10%";
	};
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
const frame = document.getElementById("frame");
const card = document.getElementById("card");
const light = document.getElementById("light");

let { x, y, width, height } = frame.getBoundingClientRect();

function mouseMove(e) {
	const left = e.clientX - x;
	const top = e.clientY - y;
	const centerX = left - width / 2;
	const centerY = top - height / 2;
	const d = Math.sqrt(centerX ** 2 + centerY ** 2);

	card.style.boxShadow = `
    ${-centerX / 5}px ${-centerY / 10}px 10px rgba(0, 0, 0, 0.2)
  `;

	card.style.transform = `
    rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 8}deg)
  `;

	light.style.backgroundImage = `
    radial-gradient(circle at ${left}px ${top}px, #00000001, #ffffff11, #ffffff22)
    `;
}

frame.addEventListener("mouseenter", () => {
	frame.addEventListener("mousemove", mouseMove);
});

frame.addEventListener("mouseleave", () => {
	frame.removeEventListener("mousemove", mouseMove);
	card.style.boxShadow = "";
	card.style.transform = "";
	light.style.backgroundImage = "";
});

window.addEventListener("resize", () => {
	rect = frame.getBoundingClientRect();
	x = rect.x;
	y = rect.y;
	width = rect.width;
	height = rect.height;
});
