const myColor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btnEl = document.querySelector("#btn")
const textEl = document.querySelector("#color-text")

btnEl.addEventListener("click", function() {
    let code = "#"
    
    for(let i=0; i<6; i++){
        const randomNum = Math.floor(Math.random()*myColor.length)
        code += myColor[randomNum]
    }
    document.body.style.backgroundColor = code
    textEl.textContent = code
})
