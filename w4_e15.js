function changeVocals (str) {
  var x= 'aiueoAIUEO'
  var y= 'bjvfpBJVFP'
  var result= ''

  for (var i=0; i<str.length; i++){
      
      var huruf= str[i]
      var indeks= x.indexOf(huruf)
      var newhuruf= y[indeks]

      if (newhuruf === undefined) {
          var result = result + str[i]
      }else {
          var result = result + newhuruf
      }

  }
  return result
}  
  

function reverseWord (str) {
  var output= str.split('').reverse().join('')
  return output
}


function setLowerUpperCase (str) {
  var x= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' 
  var y= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  var result= ''

  for (var i=0; i<str.length; i++){
      
      var huruf= str[i]
      var indeks= x.indexOf(huruf)
      var newhuruf= y[indeks]

      if (newhuruf === undefined) {
          var result = result + str[i]
      }else {
          var result = result + newhuruf
      }

  }
  return result
}


function removeSpaces (str) {
  var gabung= str.split(' ').join('')
  return gabung
}

function passwordGenerator (name) {
  if (name.length <5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
    
  } else{
    var changeVocals2= changeVocals(name)
    var reverseWord2= reverseWord(changeVocals2)
    var setLowerUpperCase2= setLowerUpperCase(reverseWord2)
    var PWoutput= removeSpaces(setLowerUpperCase2)
    return PWoutput
  }

}


//TEST CASES
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'