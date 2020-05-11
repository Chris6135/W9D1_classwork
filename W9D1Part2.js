Function.prototype.inherits = function(parent) {
  function Surrogate(){};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;  //wtf
  console.log("i fucking hate js");
}

function MovingObject(speed, name) {
  this.speed = speed;
  this.name = name;

  MovingObject.prototype.isMoving = function() {
    console.log("this is from the moving object class");
  }
 }

 mover = new MovingObject(200, "moving object")

    // function Surrogate() {};
    // Surrogate.prototype = MovingObject.prototype;
    // Ship.prototype = new Surrogate();
    // Ship.prototype.constructor = Ship;  //wtf


function Ship(type, country) {
    this.type = type;
    this.country = country;

 }
Ship.inherits(MovingObject);
joeShip = new Ship("cool ship", "india");
console.log(joeShip.isMoving());
console.log(joeShip.__proto__.__proto__.__proto__);

function Asteroid(galaxy, number) {
    this.galaxy = galaxy;
    this.number = number;
 }
Asteroid.inherits(MovingObject);

console.log(Array.prototype)