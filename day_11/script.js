var mycanvas = document.getElementById("mycanvas");
var context = mycanvas.getContext("2d");


context.beginPath();
context.rect(50, 220, 400, 200);
context.fillStyle = "lightgreen";
context.fill();
context.strokeStyle = "lightgreen";
context.stroke();

context.beginPath();
context.rect(50, 20, 400, 200);
context.fillStyle = "lightblue";
context.fill();
context.strokeStyle = "lightblue";
context.stroke();

var skyGradient = context.createLinearGradient(0, 0, 0, canvas.height / 2);
skyGradient.addColorStop(0, "blue");
skyGradient.addColorStop(1, "white");

var grassGradient = context.createLinearGradient(0, canvas.height / 2, 0, canvas.height);
grassGradient.addColorStop(0, "green");
grassGradient.addColorStop(1, "white");

context.fillStyle = skyGradient;
context.fillRect(0, 0, canvas.width, canvas.height / 2);

context.beginPath();
context.moveTo(canvas.width / 2 - 50, canvas.height / 2);
context.lineTo(canvas.width / 2 - 50, canvas.height / 2 + 50);
context.lineTo(canvas.width / 2 + 50, canvas.height / 2 + 50);
context.lineTo(canvas.width / 2 + 50, canvas.height / 2);
context.strokeStyle = "black";
context.lineWidth = 2;
context.stroke();
