let a=+prompt("Введіть перше число:");
let b=+prompt("Введіть друге чиcло:");

function comparison(a,b){
if(a>b){
    return a;
}
else if(a<b){
return b;
}
else
    return 'Числа  рівні';
}


alert(comparison(a,b));