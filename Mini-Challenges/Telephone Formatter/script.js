const input = document.querySelector('.input')
let previousValue = ''
input.addEventListener('input', (e) => {
    const inputValue = e.target.value
    if (/\d+$/g.test(input.value)) {
        input.value = inputValue
    }
    else {
        input.value = inputValue.slice(0, inputValue.length - 1)
    }


    if (inputValue.length === 4 && previousValue.length < inputValue.length) {
        input.value = `+(${inputValue.slice(0, 3)}) - ${inputValue[inputValue.length - 1]}`
    }
    else if (inputValue.length === 9 && previousValue.length > inputValue.length) {
        input.value = `${inputValue.slice(2, 5)}`
    }
    previousValue = input.value

})