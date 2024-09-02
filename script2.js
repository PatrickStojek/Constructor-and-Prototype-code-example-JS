const sayHello = function(hello = 'Hello', endMark = '!') {
    console.log(` ${hello} ${this.firstName} ${this.lastName} ${endMark}`)
}
const person = {
    firstName : 'Ala',
    lastName: 'Kotowicz'
}
sayHello.call(person, 'Cześć', '!')
sayHello.apply(person, ['Cześć' , '!'])
const sayHelloBound = sayHello.bind(person)
sayHelloBound('Witam', '!!!')
console.log(sayHelloBound === sayHello) //false

sayHelloBound.call(person) //won't affect the bounded sayHelloBound function
