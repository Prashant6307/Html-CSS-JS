

const form = document.querySelector('form')
const userBill = document.querySelector('.bill')
const allTipBtn = document.querySelectorAll('.tip-btn')
const customTip = document.querySelector('.custom-tip')
const personCount = document.querySelector('.person-count')
const tipAmt = document.querySelector('.tip-amount')
const totalAmt = document.querySelector('.total-amount')
const individualPay = document.querySelector('.individual-bill')
const generateBillBtn = document.querySelector('.generate-bill-btn')

let tipAmtValue
let total


generateBillBtn.disabled = true


form.addEventListener('submit', (event) => {
    event.preventDefault()
})
form.addEventListener('reset', () => {
    generateBillBtn.disabled = true
    tipAmt.innerText = ''
    totalAmt.innerText = ''
    individualPay.innerText = ''
})
allTipBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const userBillValue = Number(userBill.value)
        const customTipValue = Number(customTip.value)
        let tipPercent = Number(btn.innerText.replace('%', ''))
        generateBillBtn.disabled = false

        if (customTipValue) {
            tipPercent = customTipValue

        }

        tipAmtValue = userBillValue * (tipPercent / 100)

        console.log(tipAmtValue);

    })

})

customTip.addEventListener('input', () => {

    const userBillValue = Number(userBill.value)
    const customTipValue = Number(customTip.value)

    if (customTipValue > 0) {

        tipAmtValue = userBillValue * (customTipValue / 100)

        generateBillBtn.disabled = false

        console.log(tipAmtValue)
    }
})

generateBillBtn.addEventListener('click', () => {
    const userBillValue = Number(userBill.value)
    const totalPersons = Number(personCount.value)

    total = userBillValue + tipAmtValue

    const eachPersonBill = total / totalPersons

    tipAmt.innerText = `₹${tipAmtValue.toFixed(2)}`
    totalAmt.innerText = `₹${total.toFixed(2)}`
    individualPay.innerText = `₹${eachPersonBill.toFixed(2)}`
})