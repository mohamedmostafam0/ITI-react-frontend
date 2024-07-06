let sum = 0;
while (sum <= 100) {
    let entry = prompt("Enter a number: ")
    entry =parseFloat(entry);
    console.log("You entered : " + entry);
    
    if (entry === 0) {
        break;
    }
    
    sum += entry;
    console.log("current sum is : " + sum);
      if (sum > 100) {
        break;
      }
    }
    
document.write("sum is : " + sum);