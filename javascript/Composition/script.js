// function square(val){
//     return val * val
// }

// function add(a,b){
//     return a+b
// }

// function multiple(a,b){
//     return a*b

// }

// function composeTwoFunction(fn1,fn2){
//     return function(a,b){
//         return fn2(fn1(a,b));
//     };
// };

// ES6 javascript
// const c2f = (fn1,fn2) =>(a,b) =>fn2(fn1(a,b))
// const task = composeTwoFunction(multiple, square)
// const task = c2f(multiple, square)
// console.log(task(2,3))



// unlimited function and value  how we can do  compose unlimited function

function add(agrs){
    return agrs[0]+agrs[1]
}

function square(val){
    return val * val
}
function multiple(agrs){
    return agrs[0]*agrs[1]

}

// function compose(...functions){
//     return function(...value){
//         return functions.reduce((a,b)=>b(a),value);
//     }
// }

// const task = compose(multiple, square)
// console.log(task(5,3))

// using ES6
// const composeAll = 
//         (...functions)=>
//         (...val)=>
//         functions.reduce((a,b)=>b(a),val)

// const task = composeAll(multiple, square)
// console.log(task(5,3))




// we can add unlimited values
const composeAll = 
        (...functions)=>
        (...val)=>
        functions.reduce((a,b)=>b(a),val)

const task = composeAll(multiple, square, function(val){
    return val+1
})
console.log(task(5,3))