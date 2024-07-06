let x = prompt("enter value of x(int): ");
x = parseInt(x);
//document.write(typeof(x));
let y = prompt("enter value of y(int): ");
y = parseInt(y);
//document.write(typeof(y));
let z = prompt("enter value of z(string): ");

if(z==="odd"){
    for(i = x; i < y; i++){
        if(i%2===1){
            document.write(i + "\n");
            document.write("<br>");
        }
    }
}

if(z==="even"){
    for(i = x; i < y; i++){
        if(i%2===0){
            document.write(i + "\n");
            document.write("<br>");
        }
    }
}


if(z==="no"){
    for(i = x; i < y; i++){
            document.write(i + "\n");
            document.write("<br>");
        
    }
}
document.write("Sum of x and y is: " + x + y);