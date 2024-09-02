const showAllArguments = function() {
    console.log(arguments)
}

//this fill fall due to reference error: arguments not defined
const showAllArgumentsArrow = () => {
    console.log(arguments) //this won't work
}

///constructor function
//regular function
const Greeter = function(name) {
    this.name = name
}


Greeter.prototype.sayHello = function() {
    console.log(` Hello ${this.name}`)
}

const greeter1 = new Greeter('Mateusz')

//arrow function
const GreeterArrow = (name) => {
    this.name = name
}

GreeterArrow.prototype.sayHello = function() {
    console.log(`Hello ${this.name}`) //this won't work beacuase GreeterArrow.prototype equals undefined
}