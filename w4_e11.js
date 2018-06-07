function changeMe(arr) {

    var Obj= {}
 
    for (var i=0; i<arr.length; i++){
        
        Obj.number = i+1
        Obj.firstName = arr[i][0]
        Obj.lastName = arr[i][1]
        Obj.gender = arr[i][2]

        if (arr[i][3] === undefined || arr[i][3] > 2018) {
            Obj.age = 'Invalid Birth Year'
        }else {
            Obj.age = 2018-arr[i][3] 
        }
        
        var intro = Obj.number+ '. ' +Obj.firstName+ ' ' +Obj.lastName + ':'
        console.log (intro)

        delete Obj.number 
        console.log (Obj)
    }    
}


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
changeMe([]); 