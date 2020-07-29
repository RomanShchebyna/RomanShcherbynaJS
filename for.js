


let count= +prompt('Скільки категорій витрат було у Вас за минулий місяць?');
if (count!=0)
{
let monthlyExpenses={
   
}


for (let i=1; i<count+1; i++){
    let costСategory= prompt(`Введіть назву категорії ${i}:`);
    let sum = +prompt(`Введіть суму витрат по по категорії ${costСategory}`);
    monthlyExpenses[costСategory]=sum;
  
}
console.log(monthlyExpenses);




  function calcAllcost(){
    let sum=0;
    for (let key in monthlyExpenses) {
        // ключи
        //alert( key );  // name, age, isAdmin
        // значения ключей
    
     sum =sum + monthlyExpenses[key];
     console.log(sum);
     
      }
     return sum;
    }
    

alert(`Минулого місяця ваші витрати складають ${calcAllcost()} грн.`) ;
}
else
alert("Невірне значення введіть повторно");