function checkAB(num) {
    
    var arrA= []
    var arrB= []
    
    for (var i = 0; i < num.length; i++) {       // cari A di index berapa & B di index berapa saja
        if (num[i] === 'a') {
            arrA.push(i)
        }else
        if (num[i] === 'b') {
            arrB.push(i)
        }
    } 
       //console.log (arrA)
       //console.log (arrB)
      

    for (var i = 0; i < arrA.length; i++) {
        
        for (var j = 0; j < arrB.length; j++) {
            
            var jarak= Math.abs(arrB[j]-arrA[i])
                  
        }
        //console.log (jarak)
    }
    return (jarak===4)
}


  // TEST CASES
  console.log(checkAB('lae nborrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false