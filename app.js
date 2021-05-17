const { printTable } = require("console-table-printer")
const { getTitle } = require("./view")
const { valueImput } = require("./view")

function app(state, update, view) {
    const { model, currentView } = state
    const { title, table } = currentView
    console.clear()
    console.log(title)
    printTable(table)
    const { billAmount, percentage } = await valueImput(model)
    console.log(billAmount, percentage)
    getTitle()
    console.log()
}

module.exports = {
    app
}