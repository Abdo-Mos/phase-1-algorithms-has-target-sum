function hasTargetSum(array, target) {
  // first loop to iterate over the array.length
  for(let i = 0; i < array.length; i++) {
    // assign current array value
    const currentArr = array[i]
    // subtract the targeted value from the current array
    const difference = target - currentArr
    // second for loop 
      // adding one to the current array possition 
    for(let j = i + 1; j < array.length; j++) {
      // getting the current possition of the array with the added one 
      const currentArrJ = array[j]
      // checking if currentArrJ is equal to the difference
        // it true retiurn true 
      if(currentArrJ === difference) { return true }
    }
  }
  // return false if the difference does not equal the number
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
