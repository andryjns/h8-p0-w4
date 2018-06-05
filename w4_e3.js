function cariMedian(arr) {
    
    var itengah= (arr.length/2)-1

    if (arr.length%2 === 0){    // if jumlah arr genap
        var itengah1= itengah
        var itengah2= itengah+1
        var median= (arr[itengah1]+arr[itengah2])/2
       
    } else {                                    // if jumlah arr ganjil
        var itengah= Math.ceil(itengah)
        var median=  arr[itengah]
    }
    return median
}

  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5