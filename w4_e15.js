function changeVocals (str) {
  var str= str.split('')

  for (i=0; i < str.length; i++) {

    switch (str[i]) {
      case 'a': str[i]="b"; break;
      case 'i': str[i]="j"; break;
      case 'u': str[i]="v";break;
      case 'e': str[i]="f";break;
      case 'o': str[i]="p";break;
      case 'A': str[i]="B";break;
      case 'I': str[i]="J";break;
      case 'U': str[i]="V";break;
      case 'E': str[i]="F";break;
      case 'O': str[i]="P";break;
      
    }
  }
  var result= str.join('')
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