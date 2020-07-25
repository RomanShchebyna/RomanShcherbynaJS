let ProductPrise1= +prompt("Введіть вартість першого товару");
let countProduct1=+ prompt("Введіть кількість першого товару");

let ProductPrise2= +prompt("Введіть вартість другого товару");
let countProduct2=+ prompt("Введіть кількість другого товару");

function sumProduct(Prise1,count1,Prise2,count2){
 let sum= (Prise1*count1)+(Prise2*count2);
 console.log(arguments)
 return sum;

}

console.log(`Сума ${countProduct1} перших товарів та  ${countProduct2} других товарів дорівнює ${sumProduct(ProductPrise1,countProduct1,ProductPrise2,countProduct2)} грн.`);
alert("Результат виведений в консолі");