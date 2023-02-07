function tallestFriend ( height ) {
    //Write your code here
    let tall = height.sort(function(a, b){return b - a});
    let TallestPerson = tall[0];
    return TallestPerson ;

    //Don't forget to return
    }

    let x = [157,  134,  188, 156 , 201 ];
    let y = tallestFriend (x);
    console.log(y);