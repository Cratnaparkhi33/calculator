const display = document.getElementById("display");

const buttons = document.querySelectorAll(".btn")

const equalBtn = document.getElementById("equal")

const clearBtn = document.getElementById('clear')

buttons.forEach(    button=>{
    button.addEventListener("click", ()=>{
        display.value +=button.textContent
    })
})

equalBtn.addEventListener("click", ()=>{
    try{
        display.value=eval(display.value)
    }
    catch{
        display.value = "Error"
    }
})

clearBtn.addEventListener("click", ()=>{
    display.value="";
})