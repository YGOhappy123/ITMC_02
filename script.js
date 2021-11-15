const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const candyIp = $('.candy-input')
const errorMsg = $('.error-msg')
const totalCandyEl = $('.total-candy')
const resetBtn = $('.reset-btn')

candyIp.onkeyup = function(e) {
    errorMsg.innerText = ''

    if (e.keyCode === 13) {
        const candy = parseInt(e.target.value)
        if (candy >= 1 && candy <= 10) {
            candyIp.disabled = true
            const totalCases =  calculatePossibleCases(candy)
            totalCandyEl.classList.remove('invisible')
            totalCandyEl.innerText = `Tổng số trường hợp có thể là: ${totalCases}`
        } else {
            e.target.value = ''
            errorMsg.innerText = 'vui lòng nhập giá trị từ 1 đến 10'
        }
    }
}

function calculatePossibleCases(candy, total = 1) {
    if (candy === 1) {
        return total
    }
    return calculatePossibleCases(candy -1, total * candy)
}

resetBtn.onclick = function() {
    candyIp.disabled = false
    candyIp.focus()
    candyIp.value = ''
    errorMsg.innerText = ''
    totalCandyEl.classList.add('invisible')
}