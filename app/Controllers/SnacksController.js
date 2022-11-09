import { appState } from "../AppState.js";
import { snacksServices } from "../Services/SnacksServices.js";
import { setHTML, setText } from "../Utils/Writer.js";


function _drawSnacks() {
    let template = '';
    appState.snacks.forEach(s => template += s.SnackTemplate)
    // console.log('drawing snacks')
    setHTML('snacks', template)
}

function _drawMySnacks() {
    // console.log('drawing mine')
    let template = '';
    appState.mySnacks.forEach(s => template += s.MySnackTemplate);
    setHTML('my-snacks', template)
    // console.log('drawing my snacks', template)
}



export class SnacksController {
    constructor() {
        appState.on('mySnacks', _drawMySnacks)
        appState.on('money', this.enoughMoney)
        _drawMySnacks()
        _drawSnacks()
        // console.log('drawing snacks')
    }

    buySnack(snackId) {
        snacksServices.buySnack(snackId);
        let snacksSection = document.getElementById('snacks');
        let buttonElemArray = snacksSection.querySelectorAll('button');
        // console.log(buttonElemArray[0])
        buttonElemArray.forEach(btn => btn.setAttribute('disabled', true))
        // console.log('buttons are all disabled')
        for (let snack of appState.snacks) {
            this.enoughMoney()
        }

    }

    enoughMoney() {
        // console.log('is there enough money?')
        let hopefullyAnObject = snacksServices.enoughMoney()
        if (hopefullyAnObject) {
            let objectIWant = appState.snacks.find(s => s.id == hopefullyAnObject.id)
            document.getElementById(`${objectIWant.id}`).removeAttribute('disabled');
            // console.log(objectIWant)
        } else {

            // console.log('there is not enough money')
        }

    }

    eatSnacks() {
        snacksServices.eatSnacks()
    }

}

