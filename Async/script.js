console.log('Hello..'); // f1 (executes first)

function sync() {
    console.log('step 1'); // f3
    console.log('step 2'); // f4
    console.log('step 3'); // f5
}

sync(); // f2 (call to the sync function, executes its contents sequentially)

let a = 100;
let b = 20;
let c = a + b;

setTimeout(() => console.log('step1'), 0); // f6 (executes after synchronous code finishes)
setTimeout(() => console.log('step2'), 2000); // f7 (executes after 2000ms)
setTimeout(() => console.log('step3'), 1000); // f8 (executes after 1000ms)

console.log('bye'); // f9 (executes immediately after synchronous code)


