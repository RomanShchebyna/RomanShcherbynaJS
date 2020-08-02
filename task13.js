let str=prompt(`Введіть декілька чисел через кому:`,'100,2,1,3,0,5,999');

let array=str.split(',');
console.log(array);

// function Sort(A){
//     for(let i=0; i<A.length;i++)
//     {
//         for(let j=0; j < A.length-i;j++)
//         {
//          if (A[j+1] < A[j]){
//             let c=A[j+1];
//             A[j+1]=A[j];
//             A[j]=c;  
//         }

//         }
      
      
    
//     }
    
// return A;
   
// } 
// console.log( Sort(array));
// console.log( Sort2(array));

// function Sort2(A)       // A - массив, который нужно
// {                               // отсортировать по возрастанию.
//     let n = A.length;
//     for (let i = 0; i < n-1; i++)
//      { let min = i;
//        for (let j = i+1; j < n; j++)
//         { if (A[j] < A[min]) min = j; } 
//        let t = A[min]; A[min] = A[ i ]; A[ i ] = t;
//      }                    
//     return A;    // На выходе сортированный по возрастанию массив A.
// }

function sortString(A){
A.sort();
return A;
}

function sortNumValue(A){
    A.sort(function(a,b){return a-b});
    return A;
    
    }

    console.log(`Сортировка строк sortString ${sortString(array)}`);
    console.log(`Массив відсортований від меншого значення до більшого\n ${sortNumValue(array)}`);

    alert(`Масив відсортований від меншого значення до більшого\n ${sortNumValue(array)}`);