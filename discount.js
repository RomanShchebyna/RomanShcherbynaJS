let sum = +prompt("На яку сумму ви зробили закупку?");

discounSum(sum);

function discounSum(sum){
    
    if (sum<=1000){
        
        sumDiscount=sum*3/100;
        prise = sum-sumDiscount;
        console.log(`Ваша знижка 3% (${sumDiscount} грн.)\nВартісь покупки зі знижжкою ${prise} грн.`);
    }
    else if  (sum>1000 && sum<=5000){
        sumDiscount=sum*5/100;
        prise = sum-sumDiscount;
        console.log(`Ваша знижка 5% (${sumDiscount} грн.)\nВартісь покупки зі знижжкою ${prise} грн.`);
    }
    else if (sum > 5000){
        sumDiscount=sum*10/100;
        prise = sum-sumDiscount;
        console.log(`Ваша знижка 10% (${sumDiscount} грн.)\nВартісь покупки зі знижжкою ${prise} грн.`);
       }
    
}


