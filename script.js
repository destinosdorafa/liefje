function startGame(){

document.querySelector(".intro").style.opacity="0"

setTimeout(()=>{

document.querySelector(".intro").style.display="none"
document.getElementById("puzzle").classList.remove("hidden")

},800)

}



function moveNext(current,nextId){

if(current.value.length>=1){

document.getElementById(nextId)?.focus()

}

checkFields()

}



function checkFields(){

let l=document.getElementById("n1")
let f=document.getElementById("n4")
let e=document.getElementById("n6")

if(l.value==12){
l.classList.add("correct")
}else{
l.classList.remove("correct")
}

if(f.value==6){
f.classList.add("correct")
}else{
f.classList.remove("correct")
}

if(e.value==5){
e.classList.add("correct")
}else{
e.classList.remove("correct")
}

}



function checkPassword(){

let l=document.getElementById("n1").value
let f=document.getElementById("n4").value
let e=document.getElementById("n6").value

if(l==12 && f==6 && e==5){

document.body.style.transition="1s"
document.body.style.opacity="0"

setTimeout(()=>{

window.location.href="level2.html"

},1000)

}else{

document.getElementById("message").innerText=
"Hint: letters have positions in the alphabet."

}

}