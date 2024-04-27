// function add(a){
//     return function (b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// console.log(add(2)(3)(10))
//  using ES6
// const add =(a) => (b) =>(c)=> a+b+c;
// console.log(add(1)(2)(3))






// function curry 

// function sendAutoEmail(to){
//     return function (subject){
//         return function (body){
//             console.log(`Sending Email to ${to} with subject ${subject}: ${body}`)
//         }
//     }
// }

// let step1 = sendAutoEmail('rahulsingh00c@gmail.com')
// let step2 =step1('New Order Confirmation')
// step2('Hey Prince, Here is something for you')


// Using ES6

// const sendAutoEmail = (to)=> (subject) => (body) => `Sending Email to ${to} with subject ${subject}: ${body}`


// let step1 = sendAutoEmail('rahulsingh00c@gmail.com')
// let step2 =step1('New Order Confirmation')
// step2('Hey Prince, Here is something for you')