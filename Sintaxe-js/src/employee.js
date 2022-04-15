const EntityBase = require("./EnityBase");
class EntityBase extends EntityBase{
    static #TAXES_PERCENTUAL = 0.2
    #grossPay = 5000.40
    get grossPay(){
        return Intl.NumberFormat("pt-br", {
            currency: "BRL",
            style: "currency"
        }).format(this.#grossPay)
    }
}

module.exports = Employee