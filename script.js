let numbers = 21;
for (let i = 1; i < numbers; i++) {
if (i%2===0) {
console.log(i);      
}
}
let printNumbersTill = (a) => {
for (i = 1; i < a; i++) {
    console.log(i)
    }
return i;
}

let getGreetingTo = (a) => {
return 'Hello ' + a + '!';
}
console.log(getGreetingTo('Mark'));

let printValues = (megoldas) => {
    megoldas.forEach(szam => {
        console.log(szam);
    });
}
console.log(printValues([10, 20, 30, 50, 12]))
