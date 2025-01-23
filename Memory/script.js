let bigNum = 9007199254740991n

const bigNum2 = BigInt(9007199254740991)

let a = 100
a = 200
let b = a
b=300

console.log('a is ',a)
console.log('b is ',b)

let obj1 = {name:'Danya',age:24}
let obj2 = obj1

obj1.age = 25
obj2.name = 'ramya'

console.log('obj1',obj1)
console.log('obj2',obj2)

let arr1 = [2,3,4]
let arr2 = arr1
arr2[0] = 10
console.log(arr1,arr2)
