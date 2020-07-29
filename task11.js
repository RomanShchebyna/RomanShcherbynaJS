
 count=+prompt(`Введіть кількість елементів массиву:`);
if (count!=0)
{
Arr=[];
for (let i=0;i<count;i++){
    Arr[i]=+prompt(`Введіть значення${i+1} елемента массиву`);

}
console.log(Arr);
console.log(`Масив має ${Arr.length} елементів`);

function Maxvalue(array){
    let value=array[0];
    for (let i=0; i<array.length; i++) {

        if (array[i]>value){
            value = array[i]
           
       }
         
    }
return value;
    }
    
    function Minvalue(array){
        let value=array[0];
        for (let i=0; i<array.length; i++) {
    
            if (array[i]<value){
                value = array[i]
                
           }
             
        }
    return value;
        }


alert(`Максимальне значення в массиві ${Maxvalue(Arr)}`);
alert(`Мінімальне  значення в массиві ${Minvalue(Arr)}`);
}
else
alert('Запустіть заново')
