function ubahHuruf(kata) {

    var alf='abcdefghijklmnopqrstuvwxyz'
    var newkata= []
 
    for (var i=0; i < kata.length; i++){
        var cari=  alf.indexOf(kata[i]) 
        var newhuruf = alf[cari+1]
        newkata.push(newhuruf)
    }
    //console.log (newkata)
    var newkata= newkata.join('')
    return newkata
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu