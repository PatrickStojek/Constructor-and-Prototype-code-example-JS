const Counter = function(selector) {
    const container = document.querySelector(selector)
    if(!container) throw new Error(`there is no container element`)
    this.selector = selector
    this.container = container
    this.number = 0
}

Counter.prototype.render = function() {
     this.container.innerText = ''

     const h1 = document.createElement('h1')
     const button = document.createElement('button')
     h1.innerText = this.number

     this.container.appendChild(h1)
}
Counter.prototype.inc = function() {
    this.number = this.number + 1
}

Counter.prototype.status = function() {
    console.log('the current number is' + this.number)
}

const counter1 = new Counter('.counter-1')