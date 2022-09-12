/*============Functions ===============*/

function sum(arrays){
    return arrays.reduce((a, b)=>(a+b),0);
}


function multiply(arrays){
    return arrays.reduce((a, b)=> (a * b),1);
}


function reverse(s){
    return s.split("").map(a=>a).reverse().join("");
}



function filterLongerWords(arrays, i){
    return arrays.filter(a=>a.length > i);
}
