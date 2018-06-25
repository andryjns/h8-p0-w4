function hitungHuruf(kata) {

    // CONVERT KALIMAT KE BENTUK ARRAY & BUAT HURUF DALAM SETIAP KATA BERURUT //

    var arr= kata.toLowerCase().split(' ')   //[ 'today,', 'is', 'the', 'greatest', 'day', 'ever' ]
    console.log (arr)

    var urut=[]

    for (i=0; i<arr.length; i++) {
        var x= arr[i].split('').sort().join('')
        urut.push(x)
    }
    
    //console.log (urut)  //[ ',adoty', 'is', 'eht', 'aeegrstt', 'ady', 'eerv' ]
    
    

    // HITUNG (COUNT) JUMLAH HURUF KEMBAR DALAM SETIAP KATA //

    var sumcount=[]

    for (i=0; i < urut.length; i++) {               // refer to kata dalam kalimat
       
        var counter= 0

        for (j=0; j < urut[i].length; j++) {      // refer to kata
            
            if (urut[i][j-1]===urut[i][j] || urut[i][j]===urut[i][j+1]) {        // refer to huruf kembar
                counter++     
            }          
        }
        sumcount.push(counter)        
    }        
    console.log (sumcount)


    // DETERMINE COUNTER TERBESAR & CARI COUNTER TSB ADALAH INDEX KEBERAPA (utk pairing dengan KATA-nya) //

    if (Math.max(...sumcount) === 0) {
        var result= -1
    }else {
        
        var index= sumcount.indexOf(Math.max(...sumcount))    //cari index dari counter terbesar    
        //console.log (index)   
       
        var result= arr[index]            //index diketahui, bisa dipairing ke kata yg mana
    }  

return result
}


// TEST CASES
console.log(hitungHuruf('Today, greatest ever is day the')); // greatest
console.log(hitungHuruf('I a developer passionate am')); // passionate
console.log(hitungHuruf('adalah gembala anak aku' )); // adalah
console.log(hitungHuruf('rajin kaya pangkal')); // pangkal (skrg mestinya kaya)
console.log(hitungHuruf('perahu mengayuh danau di')); // danau
console.log(hitungHuruf('aabbcc ddeeff gghhhii jjkkll')); //gghhhii
console.log(hitungHuruf('abc def ghi'));