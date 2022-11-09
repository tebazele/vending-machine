import { appState } from "../AppState.js";
import { Snack } from "../Models/Snack.js";
import { saveState } from "../Utils/Store.js";


class SnacksServices {
    buySnack(snackId) {
        let currentSnack = appState.snacks.find(s => s.id == snackId);
        // console.log(currentSnack)
        appState.mySnacks.push(currentSnack)
        saveState('mySnacks', appState.mySnacks)
        appState.money -= currentSnack.price
        appState.snacks.forEach(s => s.btnState = 'disabled')
        // console.log(appState.mySnacks)
        appState.mySnacks = appState.mySnacks;
    }

    // NOTE check if money is >= snack.price (export money from appstate and compare it to snack price in snack controller, add event listener to listen for changes in money)
    // 
    enoughMoney() {
        let snackObj = appState.snacks.find(s => s.price <= appState.money && s.btnState == 'disabled');
        // let allSnacks = 'all snacks are available'
        if (snackObj) {
            // console.log('can buy candy bar')
            snackObj.btnState = 'enabled';
            return snackObj
        } else {
            // console.log('there is not enough money')
            return false
        }

    }

    eatSnacks() {
        if (window.confirm('This will delete all your snacks. Eat snacks?')) {
            appState.mySnacks = []
        }
    }
}

export const snacksServices = new SnacksServices();

