var Arr = [];
for(i = 0; i < 5; i++){
    var x = prompt("Enter your 5 digit array: ");
    Arr.push(x);
}

document.write("Your array in ascending order is: " + Arr.sort(function(a, b){
    return a - b;
}) + "<br>");
document.write("Your array in descending order is: " + Arr.sort(function(a, b){
    return b - a;
}));


