console.log("message");
let body = document.querySelector("body")
let button = document.querySelector("#JamesTheButton");
button.addEventListener("click", () => {
    alert("WARNING")
    setInterval( () => {
        body.style.backgroundColor = `rgb(${random()},${random()},${random()})`
        }, 10)
    console.log(button)
});
let random = () => {
    return Math.floor(Math.random()*255)
}

