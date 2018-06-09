function hitungHuruf(kata) {

    // CONVERT KALIMAT KE BENTUK ARRAY & BUAT HURUF DALAM SETIAP KATA BERURUT //

    var arr= kata.toLowerCase().split(' ')   //[ 'today,', 'is', 'the', 'greatest', 'day', 'ever' ]
    
    var urut=[]

    for (i=0; i<arr.length; i++) {
        var x= arr[i].split('').sort().join('')
        urut.push(x)
    }
    
    //console.log (urut)  //[ ',adoty', 'is', 'eht', 'aeegrstt', 'ady', 'eerv' ]
    
    

    // HITUNG (COUNT) JUMLAH PASANGAN DALAM SETIAP KATA //

    var sumcount=[]

    for (i=0; i < urut.length; i++) {               // refer to kata dalam kalimat
       
        var counter= 0

        for (j=0; j < urut[i].length-1; j++) {      // refer to kata
            
            if (urut[i][j]===urut[i][j+1]) {        // refer to huruf
                counter++     
            }          
        }
        sumcount.push(counter)        
    }        
    //console.log (sumcount)


    // DETERMINE COUNTER TERBESAR & CARI COUNTER TSB ADALAH INDEX KEBERAPA (utk pairing dengan KATA-nya) //

    var sumcount2= sumcount.slice(0)   // cloning
    var sumcount2= sumcount2.sort()
    //console.log (sumcount2)

    if (sumcount2[sumcount2.length-1] === 0) {
        var hasil= -1
    }else {
        var max= sumcount2[sumcount2.length-1]  // ambil counter terbesar (paling kanan)
        //console.log(max)

        var index= sumcount.indexOf(max)    //cari index dari counter terbesar    
        //console.log (index)   
       
        var hasil= arr[index]            //index diketahui, bisa dipairing ke kata yg mana
    }  

return hasil
}


// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau