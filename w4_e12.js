function shoppingTime(memberId, money) {

    var Obj= {}
    var barang= {
        'Sepatu Stacattu': 1500000,
        'Baju Zoro': 500000,
        'Baju H&N': 250000,
        'Sweater Uniklooh': 175000,
        'Casing Handphone': 50000
    }
    

    if (memberId === '' || memberId === undefined || money === undefined) {
        return ("Mohon maaf, toko X hanya berlaku untuk member saja")
       
    } else if (memberId !== '' && money < 50000) {
        return ("Mohon maaf, uang tidak cukup")
        
    } else {

        Obj.memberId= memberId
      
        Obj.money= money
                
        Obj.listPurchased= []
            if (money >= barang['Sepatu Stacattu'] ) {
                var money= money-barang['Sepatu Stacattu'] 
                Obj.listPurchased.push('Sepatu Stacattu')
            }

            if (money >= barang['Baju Zoro'] ) {
                var money= money-barang['Baju Zoro'] 
                Obj.listPurchased.push('Baju Zoro')
            }
        
            if (money >= barang['Baju H&N'] ) {
                var money= money-barang['Baju H&N'] 
                Obj.listPurchased.push('Baju H&N')
            }
            
            if (money >= barang['Sweater Uniklooh'] ) {
                var money= money-barang['Sweater Uniklooh'] 
                Obj.listPurchased.push('Sweater Uniklooh')
            }

            if (money >= barang['Casing Handphone'] ) {
                var money= money-barang['Casing Handphone'] 
                Obj.listPurchased.push('Casing Handphone')
            }
            
        Obj.changeMoney= money
        return Obj           
    }                  
}

  console.log(shoppingTime('1820RzKrnWn08', 2475000));
  console.log(shoppingTime('82Ku8Ma742', 170000));
  console.log(shoppingTime('', 2475000));
  console.log(shoppingTime('234JdhweRxa53', 15000));
  console.log(shoppingTime());