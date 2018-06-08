function countProfit(shoppers) {

    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];

    var result =[]
    
    if (shoppers.length === 0) {
        return []
    }else {

        for (i=0; i < listBarang.length; i++) {
            
            var Obj={}          
            //console.log(Obj)
            
            var name= []
            var leftOver= listBarang[i][2]
            var totalProfit= 0
            
            for (j=0; j < shoppers.length; j++) {
                
                if (listBarang[i][0] === shoppers[j]['product'] && shoppers[j]['amount'] <= leftOver ) {
                    name.push(shoppers[j]['name'])                                                 // SHOPPERS

                    var leftOver= leftOver-shoppers[j]['amount']                                  // LEFT OVER                           
                      
                    var totalProfit= totalProfit + (listBarang[i][1] * shoppers[j]['amount'])     //  TOTAL PROFIT
            
                }
        
            }
            Obj.product= listBarang[i][0]
            Obj.shoppers= name
            Obj.leftOver= leftOver
            Obj.totalProfit= totalProfit

            result.push(Obj)
        }
        return result
    }   
}


// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));

console.log(countProfit([])); //[]

