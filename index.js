const {initModel} = require("./model")
//const {view} = require("./view")
//const {update} = require ("./update")
const {app} = require ("./app")

const state = {
    model: initModel,
}

app(state, true, true)