function toggleCard(card){

let cards = document.querySelectorAll(".card")

cards.forEach(c => {

if(c !== card){

c.classList.remove("active")

}

})

card.classList.add("active")

}



function checkLevel2(){

let correct = [

1, // similarity
2, // intelligence
3, // cuteness
4, // blue eyes
5, // kindness
6, // communication
7, // adventure
8, // funny
9, // beautiful
10 // slijmbal

]

let inputs = [

document.getElementById("r1").value,
document.getElementById("r2").value,
document.getElementById("r3").value,
document.getElementById("r4").value,
document.getElementById("r5").value,
document.getElementById("r6").value,
document.getElementById("r7").value,
document.getElementById("r8").value,
document.getElementById("r9").value,
document.getElementById("r10").value

]

let success = true

for(let i=0;i<correct.length;i++){

if(inputs[i] != correct[i]){

success=false

}

}

if(success){

window.location.href="final.html"

}else{

document.getElementById("message").innerText="Not quite right yet."

}

function createHeart(){

let heart = document.createElement("div")

heart.classList.add("heart")

heart.innerHTML="❤️"

heart.style.left = Math.random()*100 + "vw"

heart.style.fontSize = (20 + Math.random()*30) + "px"

document.body.appendChild(heart)

setTimeout(()=>{
heart.remove()
},6000)

}

function updateBadge(input){

let card = input.closest(".card")

let badge = card.querySelector(".badge")

if(input.value !== ""){

badge.innerText = input.value
badge.classList.add("active")

}else{

badge.classList.remove("active")

}

}

function goToFinalPuzzle(){

window.location.href = "finalpuzzle.html"

}

}