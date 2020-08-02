
let str=prompt(`Введіть декілька числе через кому:`,'100,2,1,3,0,5,999');
if(str!==null||str!=""){
let array=str.split(',');
console.log(array);




 let value=prompt('Введіть число для пошуку в массиві:');


function searchValue(A){
   let n=A.length;
   let c;
    for (let i=0; i< n; i++)
        {    
        if (value==A[i]){
            console.log(`Число ${A[i]} е в массиві ${A}`);
        return c=true;

        }
    }
    
}


if(searchValue(array)){
    console.log("Все ок")
    alert(`Число ${value} присутне в масиві`);
}
else{
    console.log("Нет числа")

    alert(`Чило ${value} відсутнє в масиві`);
}

}