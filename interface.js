function calcular(element){

    let outputTotal = document.querySelector(".tip-total-result")
    let outputTipPerson = document.querySelector(".tip-person-result")
    let inputNumberOfPeople = document.getElementById("people-number-imput")
    let numberOfPeople = document.getElementById("people-number-imput").value
    let bill = parseFloat(inputBill.value)
    let numberPercent = parseFloat(element)
    
    
    if(numberOfPeople == "" || numberOfPeople == 0){
        let textNumberOfPeople = document.getElementById("number-people-error") 
        textNumberOfPeople.style.display = 'inline'
        textNumberOfPeople.innerHTML = `<span class="error">Can't be 0</span>`
        inputNumberOfPeople.style.border = 'solid 1px red'
        
    } else if(numberOfPeople != "" || numberOfPeople != 0){
        let textNumberOfPeople = document.getElementById("number-people-error") 
        textNumberOfPeople.style.display = 'none'
        inputNumberOfPeople.style.border = 'none'
    }
    
    let resultTipPerson = (bill * (numberPercent/100)) / parseFloat(numberOfPeople)
    let resultTotal = (bill + (bill * (numberPercent/100))) / numberOfPeople

    outputTipPerson.innerHTML = `<p>$${resultTipPerson.toFixed(2)}`

    outputTotal.innerHTML = `<p>$${resultTotal.toFixed(2)}</p>`
}


function customCalculate(){
    clearButton()
    let inputCustom = document.getElementById("custom").value

    calcular(inputCustom)
}

function clearCustom(){
    
    document.getElementById("custom").value = ""
    
}

function clearButton() {

    let percent = document.getElementsByClassName("percentage-number")

    for (let i = 0; i < percent.length; i++) {
        let nPercent = percent[i]

        nPercent.classList.remove("percentage-actived")
    }
}

function reset(){

    clearButton()
    clearCustom()

    let outputTotal = document.querySelector(".tip-total-result")
    let outputTipPerson = document.querySelector(".tip-person-result")

    outputTipPerson.innerHTML = `<p>0.00</p>`
    outputTotal.innerHTML =  `<p>0.00</p>`
    inputBill.value = ""
    numberOfPeople.value = ""

    let textNumberOfPeople = document.getElementById("number-people-error") 
    let inputNumberOfPeople = document.getElementById("people-number-imput")

    textNumberOfPeople.style.display = 'none'
    inputNumberOfPeople.style.border = 'none'
    
}