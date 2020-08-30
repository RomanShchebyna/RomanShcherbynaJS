let site=prompt("Введите адрес странички");

function testsite(adress)
{
    if(adress.startsWith("https")){
        alert("Сайт использует HTTPS")
    }else{
        alert("К сожалению сайн не использует https")
    }

}
testsite(site);