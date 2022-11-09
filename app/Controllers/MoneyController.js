import { appState } from "../AppState.js";
import { moneyServices } from "../Services/MoneyServices.js";
import { setText, setHTML } from "../Utils/Writer.js";


// SECTION private functions
function _drawMoney() {
    setText('show-me-the-money', appState.money)
    // console.log('drawing money')
}

// SECTION public methods
export class MoneyController {
    constructor() {
        appState.on('money', _drawMoney)
        _drawMoney()

    }

    addMoney() {
        moneyServices.addMoney();
        // console.log(appState.money)

    }


}