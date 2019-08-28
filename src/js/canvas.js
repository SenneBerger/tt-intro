import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
function Title(x, y) {
    this.x = x
    this.y = y
    this.live = 200
    this.opac = 1
    this.color = 'rgba('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+')';
}

Title.prototype.draw = function() {
    c.font = "small-caps 150px Impact";
    c.fillText("Canvas", this.x, this.y);
    c.fillStyle = this.color
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.shadowColor = 'black'
    c.shadowBlur = 10;
}

Title.prototype.update = function() {
    this.draw()


}

// Implementation
let titles
function init() {
    titles = []

    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        titles.push(new Title(x, y))
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    c.fillText('Php can go fork itself', mouse.x, mouse.y)
    titles.forEach(title => {
     title.update()
    })
}

init()
animate()
