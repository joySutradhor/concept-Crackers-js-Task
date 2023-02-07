
function secondLargest ( numbers ) {
    //Write your code here
    
      let sorted = numbers.sort(function(a, b){return a - b});
      let secondLarge = sorted[sorted.length -2];
      return secondLarge ;
    //Don't forget to return
    
    }

    let arr = [10,33,5,99,6];
    let large = secondLargest(arr);
    console.log(large);