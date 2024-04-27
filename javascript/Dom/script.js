// const change = document.getElementsByClassName("remove")
// for (i=0; i<change.length; i++){
//     change[i].remove('remove');
// }


const button = document.getElementById('clickButton');
const uname = document.getElementById('input_username');
const username = document.getElementById('username');


button.addEventListener("click", function(){
    const value = uname.value;
    localStorage.setItem("name" , value);
    location.reload();
});


window.addEventListener('load', () => {
    const value =localStorage.getItem("name");
    username.innerText=`${value}`;
});