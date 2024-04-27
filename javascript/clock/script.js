const button = document.getElementById('stop-button');

function showTime(){
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    document.getElementById('time').innerText=time;
}

let interval = setInterval(showTime,1000);
button.addEventListener('click',()=>{
    clearInterval(interval);
});





// watch

const watch_button = document.getElementById('watch-button');
const input = document.getElementById('watch-input');
const show =document.getElementById('time-value');
const reset_button = document.getElementById("reset");
const value = input.value
let flag=false



watch_button.addEventListener('click',()=>{
    flag=true;
});
let count=0
function watch(){
    
    if (flag){
        count++
        }
    show.innerText=count;
}
let result=setInterval(watch,1000)
reset_button.addEventListener('click',()=>{
    clearInterval(result);
});




// setTimeout(() => {  it will start only onces
//     console.log('hii')
// }, 5000);


// setInterval(()=>{
//     console.log('hii') it will start again and again
// }, 5000)