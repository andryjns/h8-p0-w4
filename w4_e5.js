function ubahHuruf(kata) {

    var alf='abcdefghijklmnopqrstuvwxyza'
    var newkata= ''
 
    for (var i=0; i < kata.length; i++){
        var indeks=  alf.indexOf(kata[i]) 
        var newkata = newkata + alf[indeks+1]       
    }
    return newkata
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu