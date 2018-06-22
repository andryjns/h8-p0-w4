function tukarBesarKecil(kalimat) {

    var x= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' 
    var y= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    var result= ''

    for (var i=0; i<kalimat.length; i++){
        
        var huruf= kalimat[i]
        var indeks= x.indexOf(huruf)
        var newhuruf= y[indeks]

        if (newhuruf === undefined) {
            var result = result + kalimat[i]
        }else {
            var result = result + newhuruf
        }

    }
    return result
}
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"