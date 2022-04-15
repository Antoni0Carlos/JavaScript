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
    assert.throws(() => employee.birthYear, { message: 'you must define age first!!'})
}

{
    const employee = new Employee({
        name: 'Joaozinho',
        age: 20,
        gender: GENDER.male
    })
    assert.deepStrictEqual(employee.name, "Mr. Joaozinho")
}