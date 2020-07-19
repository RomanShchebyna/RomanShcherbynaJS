let name= prompt("Введіть ваше ім'я:");
let sum= +prompt("Введіть сумму для внессеняя на депозит:");
let numbeMonths = +prompt("Введіть кількісь місяців:");
let stavka;
let monthlyPercentage;
let income;

if ( numbeMonths<6)
{
    stavka=(sum*15)/100;
    monthlyPercentage=stavka/12;
    income=monthlyPercentage*numbeMonths;

    alert(`Шановний ${name} Ви внесли:${sum} грн.  на ${numbeMonths} місяців під 15% річних, Ваш дохід буде ${income} грн.`);
    console.log(`Шановний ${name} Ви внесли:${sum} грн. на ${numbeMonths} місяців під 15% річних, Ваш дохід буде ${income} грн.`);
}

else if(numbeMonths>=6 && numbeMonths<=9)
{
    stavka=(sum*16)/100;
    monthlyPercentage=stavka/12;
    income=monthlyPercentage*numbeMonths;

    alert(`Шановний ${name} Ви внесли:${sum} грн.  на ${numbeMonths} місяців під 16% річних, Ваш дохід буде ${income} грн.`);
    console.log(`Шановний ${name} Ви внесли:${sum} грн.  на ${numbeMonths} місяців під 16% річних, Ваш дохід буде ${income} грн.`);
}



else if(numbeMonths>9)
{
    stavka=(sum*17)/100;
    monthlyPercentage=stavka/12;
    income=monthlyPercentage*numbeMonths;

    alert(`Шановний ${name} Ви внесли:${sum} грн.  на ${numbeMonths} місяців під 17% річних, Ваш дохід буде ${income} грн.`);
    console.log(`Шановний ${name} Ви внесли:${sum} грн.   на ${numbeMonths} місяців під 17% річних, Ваш дохід буде ${income} грн.`);

}


