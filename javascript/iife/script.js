// https://developer.chrome.com/docs/capabilities/bluetooth

// use this for bluetooth connection


// (function add(a,b){
//     console.log(a+b)
// })(2,3)

// (function say(){
//     console.log('hey')
// })();

// (() =>  console.log("i am ES6"))();

// const value =(()=> 100)();
// console.log(value)

// (() => {
//     // some initiation code
//     let firstVariable;
//     let secondVariable;
//   })();
  
  // firstVariable and secondVariable will be discarded after the function is executed.



//   let data
//   async function getData(){ //we have create extra space for creating data variable
//     data = await fetch()
//   }
//   getData();

// that why we use IIFE - immediately invoked function Expression

// const data =(async ()=> await fetch())

const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // This variable is private
    const doBadThings = () => {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Insufficient money";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20)); // 0