// Write a function findOddSum() that will take the array as the input parameter and will return the sum of the odd numbers. No need to return anything if the odd numbers do not exist in the array

function findOddSum (arr) {
    let sum = 0 ;
for ( let i = 0; i<arr.length; i++) {
    if ( arr [i] % 2 !== 0 ){
        sum = sum + arr [i];
       
    }
}
return sum
}



let numbers =[5, 7, 8, 10, 45, 30];
let result = findOddSum (numbers);
console.log(result);