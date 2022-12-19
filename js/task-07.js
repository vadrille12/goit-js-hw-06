const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector('#text')

sizeControl.addEventListener("input", resizing);

function resizing() {
    text.style.fontSize = sizeControl.value + "px";
}