console.log('Javascript is running!');

let icons = document.querySelector("#icons") // vectorGraphic variable

function logID() {
    console.log(this.id);
}

icons.addEventListener('click',logID)
icons.addEventListener('click',logID)
