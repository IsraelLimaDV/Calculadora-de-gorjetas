let inputBill = document.getElementById("bill-value")
let percent = document.querySelectorAll("percentage-number")
let numberOfPeople = document.getElementById("people-number-imput")
let inputCustom = document.getElementById("custom")



function handleClick(event) {

    clearButton()
    clearCustom()

    let button = event.target
    buttonPercent = button.id
    button.classList.add("percentage-actived")

    calcular(buttonPercent)

    return buttonPercent
}


function calculateFromBill(){

    let custom = document.getElementById("custom").value

    if(custom != 0 && custom != ""){
        customCalculate()
    }else if(buttonPercent){
        calcular(buttonPercent)
    }else {
        console.log('error')
    }
}

