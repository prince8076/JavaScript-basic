// const myName = document.getElementById('my-name');
// const btn =document.getElementById('my-button')

// function makeTextSizer(size){
//     function changeSize(){
//         myName.style.fontSize =`${size}px`
//     }
//     return changeSize;
// }

// const size12= makeTextSizer(12)
// const size20= makeTextSizer(20)
// const size52= makeTextSizer(52)
// const size5= makeTextSizer(5)


// btn.addEventListener('click',size52)




// counter

const myName = document.getElementById('my-name');
const btn =document.getElementById('my-button');
function makeCounter(){
    let count = 1;
    function increment(){
        console.log(count++)
    }
    return increment;
}
const counter1 = makeCounter();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();