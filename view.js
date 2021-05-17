
const figlet = require("figlet")
const chalk = require("chalk")

//las funciones puras son auto-contenidas
function getTitle(){
    return chalk.blueBright(
        figlet.textSync(
            "Tip Calculator",
            {
                horizontalLayout: "full",
                font: "Nancyj-Underlined"
            }
        )
    )
}

function getTable(model){
    const {billAmount} = model
    return [
        {
            "Bill Amount": billAmount
        }
    ]
    const {percentage} = model
    return [
        {
            "Tip (%)": percentage
        }
    ]
    const {tip} = model
    return [
        {
            "Tip": tip
        }
    ]
    const {total} = model
    return [
        {
            "Total": total
        }
    ]
}

function valueInput(model){
    const {billAmount} = model
    const messageBill = "Bill Amount?"
    const {percentage} = model
    const messagePercent = "Tip(%)?"

}

module.exports = {
    getTitle
}