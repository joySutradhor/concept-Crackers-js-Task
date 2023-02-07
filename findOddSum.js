// Write a function findOddSum() that will take the array as the input parameter and will return the sum of the odd numbers. No need to return anything if the odd numbers do not exist in the array

function findOddSum(arrOfNumbers){
    //write your code here
          let sum = 0 ;
    for ( let i = 0; i<arrOfNumbers.length; i++) {
        if ( arrOfNumbers [i] % 2 !== 0 ){
            sum = sum + arrOfNumbers [i];
           
        }

       
    
    }
    return sum
    }
    //don't forget to write return
    
let numbers =[ 8, 10, 5, 30]
let result = findOddSum (numbers);
console.log(result);