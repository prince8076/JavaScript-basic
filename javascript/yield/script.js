

function* makeIterator(start,end,stepSize){
    for(i=start; i<=end; i+=stepSize){
        yield i  //we can make api data print using yield
    }
}



const btn =document.getElementById("next-button");
let one = makeIterator(1,20,2)
btn.addEventListener('click', ()=>{
    
    btn.innerText=one.next().value;
});