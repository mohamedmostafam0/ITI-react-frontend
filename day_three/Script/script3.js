var x = prompt("enter x: ");
var y = prompt("enter y: ");
var z = prompt("enter z: ");

if(x % y == 0  && x % z == 0){
    document.write("divisible by both");
}
    else if (x % y == 0){
        document.write("divisible by y only.");
    }

    else if ( x % z == 0){
        document.write("divisible by z only.");
    }

