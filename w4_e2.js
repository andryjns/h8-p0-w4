function fpb(angka1, angka2) {

    for (var i=angka1; i>=1; i--){
        var hasil1= angka1%i 

        if (hasil1 === 0) {
            var hasil2= angka2%i

            if (hasil2 === 0){
                return i
                break
            }
        }

    }
}



  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1  