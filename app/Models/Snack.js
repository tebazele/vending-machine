export class Snack {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.price = data.price
        this.img = data.img || '/assets/img/genric-snack.png'
        this.btnState = data.btnState
    }

    get SnackTemplate() {
        return ` <div class="col-3">
        <div class="card p-2 text-center align-items-center mt-3">
          <img src="${this.img}" class="img-fluid snack-img">
          <section class="d-flex">
            <h6 class="me-1">${this.name}</h6>
            <h6 class="ms-1">$${this.price}</h6>
          </section>
          <button class="btn btn-primary mt-3" ${this.btnState} id =${this.id} onclick="app.snacksController.buySnack('${this.id}')">Buy</button>
        </div>
      </div>`
    }

    get MySnackTemplate() {
        return `<section class="row justify-content-center">
        <div class="col-12">
          <img src="${this.img}" class="img-fluid mysnack-img">
        </div>
      </section>`
    }
}