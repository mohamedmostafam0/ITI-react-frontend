var radius = prompt("Enter your circle's radius: ");
var Area = radius*radius*Math.PI;
document.write("Your circle's area is " + Area + "<br>");

var x = prompt("Enter your number to be square rooted: ");
SquareRooted = Math.sqrt(x);
alert("Your number after it has been square rooted: " + SquareRooted);

var angle = prompt("Enter your angle value: ");
console.log(Math.round(Math.cos(angle*Math.PI)/180));
