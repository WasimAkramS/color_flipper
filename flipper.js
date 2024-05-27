const myColor = ["green", "red", "rgba(133,122,200)", "#f15025"]

const btnEl = document.querySelector("#btn")
const textEl = document.querySelector("#color-text")

console.log(btnEl)
btnEl.addEventListener("click", function(){
    const randomNum = Math.floor(Math.random() * myColor.length);
    console.log(randomNum)

    document.body.style.backgroundColor = myColor[randomNum];
    textEl.textContent = myColor[randomNum];
});
