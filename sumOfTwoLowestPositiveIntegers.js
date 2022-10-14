//Create a JavaScript function to add the two smallest numbers in an integer array
function sumTwoSmallestNumbers(numbers) {  
    numbers = numbers.sort((a,b) => a-b) //Sort the array in ascending order
    return numbers[0] + numbers[1] //The question asks to add the two smallest integers, which will now be located in index 0 and 1
  }