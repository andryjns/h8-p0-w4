function cariModus(arr) {

    var count=[]
    var i=0
    var j=0

    for (i= 0; i < arr.length; i++) {
        var value= arr[i]
        var counter=0

        for (j= 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++
            }
        }    
        count.push(counter)     //bikin array of counter       
    }    
 
    var urut= count.slice(0)   //cloning
    var urut= urut.sort()      // urut hasil counter dari kecil ke besar 
    
        if (urut[0]===urut[urut.length-1]) {
            var hasil= -1
        }else {
            var max= urut[urut.length-1]   // ambil counter terbesar (paling kanan)
            var index= count.indexOf(max)    //cari index dari counter terbesar       
            var hasil= arr[index]            //index diketahui, bisa didapat variabel yg mana
        }  
    return hasil
}


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1