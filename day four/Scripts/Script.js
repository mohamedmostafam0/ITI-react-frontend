let input = prompt("Enter your string: ");
let char = prompt("Enter your character: ");
let caps = prompt("Do you want to include upper case letters in search? (Enter yes or no) ")

let pattern;
if(caps==="yes"){
    pattern = new RegExp(char, "gi");
}
else if(caps==="no"){
    pattern = new RegExp(char, "g");
}

let matches = input.match(pattern);
let count = matches ? matches.length : 0;

document.write(char + " appeared " + count + " times in your input string");
