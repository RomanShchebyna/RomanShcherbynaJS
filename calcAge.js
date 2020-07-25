let name = prompt('Як Вас звати?');
let yearOfBirth = +prompt(`Якого Ви року народження?`);
let dateNow=2020;
let retirementAge=60;


function calcAge(year)
{ 
   return dateNow - year;
  
}

console.log(`${name} Вам  ${calcAge(yearOfBirth)} років`);


function yearsUntilRetirement(year,userName) {
 
   
    let yearsBeforeRetirement=retirementAge-year;

    if(year < retirementAge){
        console.log(`${userName} вийде на пенсію через  ${yearsBeforeRetirement} років`);
    }
    else if(year >= retirementAge){
        console.log(`${userName} Ви вже пенсіонер`);
    }
   
    
}

yearsUntilRetirement(calcAge(yearOfBirth),name);

alert("Результат можна подивитись в консолі.");