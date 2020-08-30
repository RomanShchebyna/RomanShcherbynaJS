
function numberState(randomnumber){
    let num=Math.trunc(randomnumber);
   
    if(num % 2==0){
        console.log(`${num} Парное число`);
        return num +" Парное число";
    }
    else{
        console.log(`${num} Не парное`);
        return num+ " Не парное";
    }

}

alert(numberState(Math.random()*100))