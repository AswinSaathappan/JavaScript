//map - executes callback for each array
//      element and returns new array
let priceUSD = [20,35,13]
let priceINR = priceUSD.map((x) => x *83)
console.log(priceINR)

priceINR = priceUSD.map(convert)

function convert(val){
    return val*83
}

console.log(priceINR)

const input = [ //array of objects
            {name:'John',age:15},
            {name:'Radha',age:45},
            {name:'Kaushik',age:12},
            {name:'Anu',age:21},
            {name:'Divya',age:26}
              ]

const ages = input.map( (x) => x.age)
console.log(ages)


//filter - returns new array by checking
//        each value of original arr using
//        call back fn

let cost = [35,234,12,34,54,123]

let lessThan100 = cost.filter( (x) => x<100)
console.log(lessThan100)

//reduce - executes reducer callback
//       and returns accumulated result
//arr.reduce(callback[, initialValue])
//reduce(function (accumulator, currentValue, currentIndex, array)) 

cost = [35,234,12,34,54,123]
let cartTotal = cost.reduce((total,el)=>total+el)
console.log(cartTotal)

arr2d = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ];

//result = {a:1,b:1,c:2,d:2...}
let result = {'a':1,'b':2}
result['c'] = 1
console.log(result['d']) 

console.log(arr2d.flat())
let count = arr2d.flat().reduce(
    (accumulator,currVal) => {
        if(accumulator[currVal])
            accumulator[currVal]++
        else
            accumulator[currVal] = 1
        return accumulator
    }
    ,{});

console.log(count)