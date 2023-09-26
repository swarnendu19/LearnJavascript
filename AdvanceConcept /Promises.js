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



