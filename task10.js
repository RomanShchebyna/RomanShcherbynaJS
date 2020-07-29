
 count=+prompt(`Введіть кількість елементів массиву:`);
if (count!=0)
{
Arr=[];
for (let i=0;i<count;i++){
    Arr[i]=+prompt(`Введіть значення${i+1} елемента массиву`);

}
console.log(Arr);
console.log(Arr.length);

function sum(array){
    let sum= 0;
    for (let i=0; i<array.length; i++) {

       sum+=array[i];
    }
    return sum;
}

alert(`Cума елементів массиу дорівнює  ${sum(Arr)}`);
}
else
alert('Запустіть заново')
