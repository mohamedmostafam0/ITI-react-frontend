let input = prompt("Enter your string: ");


function findLargestWord(input) {
    const arr = input.split(" ");
    let max = arr[0]; 
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i]
            ;
        }
    }
    
    return max;
}

let largestWord = findLargestWord(input);
document.write("Largest word is: " + largestWord);
