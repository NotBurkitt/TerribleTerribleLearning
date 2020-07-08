let audio = new Audio("Recording.m4a");
console.log("message");
let body = document.querySelector("body");
let button = document.querySelector("#JamesTheButton");
button.addEventListener("click", () => {
    alert("WARNING")
    setInterval( () => {
        body.style.backgroundColor = `rgb(${random()},${random()},${random()})`
        audio.play();
        }, 10)
    console.log(button)
});
let random = () => {
    return Math.floor(Math.random()*255)
};

