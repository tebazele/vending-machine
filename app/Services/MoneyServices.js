import { appState } from "../AppState.js";

// 

class MoneyServices {

    addMoney() {
        appState.money += .25
    }

}

export const moneyServices = new MoneyServices()

