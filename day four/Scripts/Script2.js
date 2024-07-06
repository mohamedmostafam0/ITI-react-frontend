let input = prompt("Enter your string: ");
let Case = prompt("Do you want case sensitivity? ");



if(Case==="no"){
    input = input.toLowerCase();
}

function isPalindrome(input) {
    let j = input.length - 1;
    for (let i = 0; i < j; i++, j--) {
        if (input[i] !== input[j]) {
            return false;
        }
    }
    return true;
}

if (isPalindrome(input)) {
    document.write(input + " is a palindrome.");
} else {
    document.write(input + " is not a palindrome.");
}


