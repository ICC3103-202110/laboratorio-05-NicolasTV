
function update(billAmount, percentage, model) {
    const { billAmount } = model
    const { percentage } = model
    const { tip } = model
    const { total } = model
    const newTip = newTip(billAmount, percentage)
    const newTotal = newTotal(billAmount, newTip)
    return {
        ...model,
        billAmount: billAmount,
        percentage: percentage,
        tip: newTip,
        total: newTotal
    }
}

function newTip(billAmount, percentage) {
    return (billAmount * percentage / 100)
}

function newTotal(billAmount, newTip) {
    return (billAmount + newTip)
}

module.exports = {
    update
}