

let firtsValue=+prompt(`Введіть значення А`)
console.log(firtsValue);
let secondValue;
do{
secondValue=+prompt(`Введіть значення В`)
    if(secondValue<firtsValue){
        alert ('Значення В менше значення А введіть заново')
    }
}while(secondValue<firtsValue)
    



function rangeNumbers(a, b){
    let pairedNumber=[];
    for (let i=a;i<=b;i++){
        if(i%2!=0){
        pairedNumber.push(i)
        }
    }
    return pairedNumber.join(",");
}

console.log(rangeNumbers(firtsValue,secondValue));
mess=rangeNumbers(firtsValue,secondValue);

alert(`Непарними числамі між А(${firtsValue}) та В(${secondValue}) являються: ${mess}`)