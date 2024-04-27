//promisification

// with promise


// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
//     document.head.appendChild(script);
//   }
// loadScript('test.js',(err,script)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("script loaded")
//     }
// })



//It’s the conversion of a function that accepts a callback into a function that returns a promise
// function promisify(fn){
//     return function(...agrs){
//         return new Promise((resolve, reject)=>{
//             fn(...agrs, (error,result) => {
//                 if (error){
//                     return reject(error)
//                 }
//                 return resolve(result)
//             })
//         });
//     }
// }

// const loadScriptNew = promisify(loadScript);
// loadScriptNew('test.js')
// .then(()=>console.log('done'))
// .catch((err)=>{
//     console.log(err)
// })


// using IIFE
// (async () =>{
    
//     try{
//         const result = await loadScriptNew('test.js')
//         console.log('done')
//     }
//     catch(error){
//         console.log(err)
//     }
    
// })();