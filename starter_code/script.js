// window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//     startGame();
//   };

//   function startGame() {

//   }
// };

let canvas = document.getElementById('gameBoard')
let ctx = canvas.getContext('2d')

// draw car image
let img = new Image();
img.src = './images/car.png'

img.onload = () =>{
  ctx.drawImage(img, 30, 30, 100, 150)
}

// draw obstacles
let obstacleImg = new Image()
obstacleImg.src = './images/log.jpeg'

obstacleImg.onload = () => {
  ctx.drawImage(obstacleImg, 0, 0, 100, 100)
}

class Road {
  constructor(x, y, widht, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  drawRoad = () => {

  }
}

class Car {
  constructor(x,y,widht,height){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  loadCar = () =>{
    // draw car image
    let img = new Image();
    img.src = './images/car.png'

    img.onload = () => {
      ctx.drawImage(img, this.x, this.y, this.width, this.height)
    }
  }

  moveCar = (distance) => {
    this[direction] += 1;
  }
  
  drawCar = () => {
    ctx.drawImage(ctx.drawImage(img, this.x, this.y, this.width, this.height))
  }
}


let camero = new Car(250,400, 50, 90)
camero.loadCar()


function animate (){
  window.requestAnimationFrame(animate)
  camero.moveCar('y')

}
// animate()
setTimeout(animate , 1000)

