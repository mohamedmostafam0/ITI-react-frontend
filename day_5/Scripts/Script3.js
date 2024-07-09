var UserName = prompt("Enter your name: ");
var UserAge = prompt("Enter your age: ");


var object ={
    Name: UserName,
    Age: UserAge
}

function dispVal(obj, key){
    document.write("Your " + key + " is " + obj[key]  + "<br>");
}

console.log(dispVal(object, "Name"));
console.log(dispVal(object, "Age"));
