// Rover Object Goes Here
// ======================
var rover = {
  direction:"N",
  x:0,
  y:0,
  travellog: []
}
// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
  }
  console.log("turnLeft was called!");
  console.log(rover.direction);
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;
    case "W":
    rover.direction = "N";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "E":
    rover.direction = "S";
    break;
  }
  console.log("turnRight was called!");
  console.log(rover.direction);
}

function moveForward(rover){
  switch (rover.direction) {
    case "N":
    if (rover.y>0){
    rover.y -= 1;
    }
    break;
    
    case "W":
    if (rover.x>0){
    rover.x -= 1;
    }
    break;
    
    case "S":
    if (rover.y<10){
    rover.y += 1;
        }
    break;
    
    case "E":
    if (rover.x<10){
    rover.x += 1;
    }
    break;
    
  }
  console.log("moveForward was called");  
  var position = (rover.x +", "+ rover.y);
  rover.travellog.push(position);
}
function command(x) {
  for (i = 0; i < x.length; i++) {
      switch (x[i]) {
      case "l": turnLeft(rover);
      break;    
      case "r": turnRight(rover);
      break;
      case "f": moveForward(rover);
      break;
      default: console.log("invalid instruction");
      break;
    }
    
  
}
}
command("rfffrffffl");
console.log(rover.travellog);