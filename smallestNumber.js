
function findingSmallest ( numbers ) {
    //Write your code here
    let num = numbers.sort(function(a, b){return a - b});
    let smallest = num[0]
    return smallest ;
    //Don't forget to return
    
    }

    let arr = [10,33,5,99,6];
    let x = findingSmallest (arr);
    console.log(x);