
function rotate(input, times){
while(times>0){
let firstElm = input.shift();
input.push(firstElm);
times--;
}

console.log(input.join(` `));
}
rotate([51, 47, 32, 61, 21], 2);
rotate([32, 21, 61, 1], 4);
rotate([2, 4, 15, 31], 5);