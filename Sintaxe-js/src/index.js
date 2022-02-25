/*const EntityBase = require('./enityBase')
console.log(new EntityBase({
    name: " Antõnio Carlos",
    gender: "male"
}) .name)

console.log(new EntityBase({
    name: " Amanda Kelly",
    gender: "female",
}) .name)*/

const assert = requere('assert')
const Employee = requere("./employee")

const GENDER = {
    male: 'male',
    female: ' famele'
}

{
    const employee = new Employee({
        name: 'Amanda Kelly',
        gender: GENDER.famele
    })
    console.log('e', employee.birthDay)
}

{
    const employee = 0
}