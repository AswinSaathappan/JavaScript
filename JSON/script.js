let json1 = "Hello"
let json2 = 3
let json3 = true
let json4 = [4,5,6,7]
let json5 = `{
    "Stock":"TCS",
    "Price":3500
}`

let json6 = `[{
    "Stock":"TCS",
    "Price":3500
},{
    "Stock":"HUL",
    "Price":2500
},{
    "Stock":"SBI",
    "Price":550
}]`

let parsed = JSON.parse(json6)
console.log(parsed[1].Price)

console.log(JSON.stringify(parsed))
console.log(json6)

console.log(parsed)