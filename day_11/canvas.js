var mycanvas = document.getElementById("mycanvas");
var context = mycanvas.getContext("2d");
// context.beginPath();
// //!x,y
// context.moveTo(100, 80);
// context.lineTo(450, 300);
// context.lineTo(100, 300);
// // context.lineTo(100, 80);
// context.closePath();
// context.strokeStyle = "aqua";
// context.fillStyle = "pink";
// context.lineWidth = "5";
// context.stroke();
// context.fill();
// // !arc
// context.beginPath();
// // ! Circle :x,y,radius,startAngle,endAngle,clockwise or anticlockwise
// // context.arc(300, 150, 50, 0, 1 * Math.PI);
// context.arc(300, 150, 50, 0, 2 * Math.PI);
// context.fillStyle = "green";
// context.fill();
// context.strokeStyle = "blue";
// context.stroke();
// //!rectangle (x,y,width,height)
// context.beginPath();
// context.rect(180, 350, 100, 100);
// context.fillStyle = "yellow";
// context.fill();
// context.strokeStyle = "red";
// context.stroke();
//! text
// context.beginPath();
// context.font = "26pt Georgia";
// context.fillStyle = "red";
// context.strokeStyle = "green";
// context.fillText("this is a canvas text", 0, 110);
// context.strokeText("this is a canvas text", 0, 110);

//!gridiant
//? linear Gridiant
// var grd1 = context.createLinearGradient(0, 0, 200, 200);
// // var grd1 = context.createLinearGradient(0, 0, 0, 200); //vertical
// // var grd1 = context.createLinearGradient(0, 0, 200, 200); // horizontal
// grd1.addColorStop(0, "blue");
// // grd1.addColorStop(0.5, "yellow");
// grd1.addColorStop(1, "green");
// context.fillStyle = grd1;
// context.fillRect(0, 0, 200, 200);

// ?Radial geridiant
// var grd2 = context.createRadialGradient(75, 50, 10, 90, 60, 100);
// grd2.addColorStop(0, "purple");
// grd2.addColorStop(1, "pink");
// context.fillStyle = grd2;
// context.fillRect(0, 0, 200, 200);
// context.arc(75, 50, 10, 0, 2 * Math.PI);
// context.arc(90, 60, 100, 0, 2 * Math.PI);
// context.stroke()

// context.translate(100, 100);
// context.rotate((45 * Math.PI) / 180);
// context.setTransform(1, 0, 0, 1, 0, 0);
// context.fillRect(0, 0, 100, 100);
