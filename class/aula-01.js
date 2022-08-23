const person = {
    name: ['Mille', 'Bob Brow'],
    age: 23,
    bio(){
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}.`)
    }
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.bio());
console.log(person.introduceSelf());