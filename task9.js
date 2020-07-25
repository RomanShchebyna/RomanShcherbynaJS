let a= + prompt(`Введіть перше чило`)
let b= + prompt('Ведіть друге чило')
let trueOrFalse = confirm("Оберіть яке чило вам повернути Ок-більше Відміна-менше");


function wordSelection(wordvalue){
    let word;
if(wordvalue){
    word ="більше";
     
}
if(!wordvalue) {
word="менше";
}
return word;
}


function moreOrLess(value1,value2,value3){
if(value3 && value1>value2 ||!value3 && value1<value2){
    console.log(value1);
     return value1;

}

if(value3 && value1<value2 ||!value3 && value1>value2){
    console.log(value2);
     return value2;
}



}
moreOrLess(a,b,trueOrFalse);

alert( `Ви обрали ${wordSelection(trueOrFalse)} число воно дорівнює:  ${moreOrLess(a,b,trueOrFalse)}`); 