import { Snack } from "./Models/Snack.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  snacks = [
    new Snack({
      id: 'chips',
      name: 'Chips',
      price: 1.50,
      img: '/assets/img/chips.png',
      btnState: 'disabled'
    }),
    new Snack({
      id: 'proteinBar',
      name: 'Protein Bar',
      price: 2.25,
      img: '/assets/img/protein-bar.png',
      btnState: 'disabled'
    }),
    new Snack({
      id: 'candyBar',
      name: 'Candy Bar',
      price: 0.75,
      img: '/assets/img/candy-bar.png',
      btnState: 'disabled'
    }),
    new Snack({
      id: 'waterBottle',
      name: 'Water Bottle',
      price: 2.00,
      img: '/assets/img/bottle-water.png',
      btnState: 'disabled'
    }),
    new Snack({
      id: 'ostrichEgg',
      name: 'Ostrich Egg',
      price: 10.00,
      btnState: 'disabled'
    }),
    new Snack({
      id: 'hummus',
      name: 'Hummus & Crackers',
      price: 3.50,
      btnState: 'disabled'
    })

  ]

  money = 0;

  mySnacks = loadState('mySnacks', [Snack])











  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
