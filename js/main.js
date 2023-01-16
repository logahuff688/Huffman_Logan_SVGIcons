console.log('Javascript is running!');

let icons = document.querySelector("#icons") // icons variable

function logID() {
    console.log(this.id);
}

function logALT() {
console.log(this.alt); 
   
}

icons.addEventListener('click',logID)
icons.addEventListener('click',logALT
