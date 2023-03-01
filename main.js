//12. Design a method to calculate the sum and average of the even element of the array. 

let array = [13, 22, 3, 4, 24, 5, 56, 66];
let add = 0;
let avr = 0;
let len = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    add += array[i];
    len++;
  }
  avr = add / len;
}
console.log(add);
console.log(avr);

let a = document.createTextNode('text');
console.log(a);