const sayHello = function() {
    console.log(`${this.firstName} ${this.lastName} !`)
}
const person = {
    firstName : 'Ala',
    lastName: 'Kotowicz'
}
sayHello.call(person)
sayHello.apply(person)
const sayHelloBound = sayHello.bind(person)
console.log(sayHelloBound === sayHello) //false

sayHelloBound()
