const promise1=new Promise(function(resolve,reject){
    //DO an async tusk 
    setTimeout(function(){
        console.log("Complete");
        resolve()
    },1000)
})

promise1.then(()=>{
    console.log("Promise Comsume");
})

new Promise(()=>{
setTimeout(()=>{
    console.log("Async task 2");
    resolve() 
},1000)
}).then(()=>{
    console.log("Async Part2 resolved");
})

 

