let stroka = prompt("Введите строку");


function trimString (str, maxlength){

    if (str.length > maxlength)
    { let newmasege = str.substring(0,maxlength) + "..."
       
       return newmasege;
    }else {
    return str;
    }
}

alert(trimString(stroka , 10));