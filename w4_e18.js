function kaliTerusRekursif(angka) {
   
    var arr= String(angka).split('')
    //console.log (arr)
    var output= 1

    for (var i=0; i < arr.length; i++ ) {
        var output= output * Number(arr[i])
        //console.log (output)
    }

    if (String(output).length === 1) {
        return output
    }else {
        var output= kaliTerusRekursif(output)
        return output
    }

}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6 