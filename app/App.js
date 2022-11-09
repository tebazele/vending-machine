import { MoneyController } from "./Controllers/MoneyController.js";
import { SnacksController } from "./Controllers/SnacksController.js";
// import { ValuesController } from "./Controllers/ValuesController.js";
// MoneyController

// SnacksController

class App {
  // valuesController = new ValuesController();
  moneyController = new MoneyController();
  snacksController = new SnacksController();
}

window["app"] = new App();
