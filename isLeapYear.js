
function findLeapYear(arrOfYears){
    //write your code here
      let arr = [] ;
      for (let i = 0; i< arrOfYears.length; i++){ 
        if (arrOfYears [i] % 4 == 0 ) {
            arr.push(arrOfYears[i]);
          
        }
      }
    //don't forget to write return
    return arr ;
    }
    

    let x = [2023,2024,2025,2028,2030];
    let y = findLeapYear (x);
    console.log(y);