
/*let user={
    name:"Roman",
    surName:"Shcherbyna",
    age:"32",
    phone:"0637467025"

}
console.log(user);
console.log(user.surName);
console.log(user['surName']);

user.city="Odesa"

console.log(user);

// user.city="sklfj;sjf"

// console.log(user);
 
// delete user.phone;
// console.log(user);

alert( null || 2 || undefined );

let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};

alert( bag.apple ); // 5, если fruit="apple"



*/


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
alert("Напевно Ви передумали запускати цю программу (");