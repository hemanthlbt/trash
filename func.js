let count = 0;
function counter() {
document.querySelector('h1').innerHTML = count;
count  = count+1;
console.log(count)
}

let decount = count;
function counter2() {
document.querySelector('h1').innerHTML = decount;
decount  = count-1; 
console.log(count);
}




