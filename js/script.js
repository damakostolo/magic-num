let max = 100
let start_num = 0 

max = Number(Math.floor(Math.random()*100))

const number_magic = document.getElementById('number_magic')
const input_number = document.getElementById('number')
const attempt = document.getElementById('attempt')

function magic(){

    start_num++
    attempt.textContent = `Кількість спроб ${start_num}` 

    if (start_num == 20){
        alert('Ви програли (((')
        location.reload()
    }else if (input_number.value == max){
        alert ('Ви перемогли!')
        location.reload()
    } else if (input_number.value < max){
        number_magic.textContent =(`Число більше ніж ${input_number.value}`)
    }else if (input_number.value > max){
        number_magic.textContent =(`Число меньше ніж ${input_number.value}`)
    }

}

