//fetch request

const fetch = require('node-fetch');


//get request

fetch('https://jsonplaceholder.typicode.com/todos')
.then(res=>console.log(res))
.catch(err=>{
    console.log(err)
})

//post

fetch('https://jsonplaceholder.typicode.com/todos/',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        title:'walk',
        
    })
})
.then(res=>console.log(res))
.catch(err=>{
    console.log(err)
})

//put

fetch('https://jsonplaceholder.typicode.com/todos/6',{
    method:'PUT',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        title:'Play Guitar',
        
    })
})
.then(res=>console.log(res))
.catch(err=>{
    console.log(err)
})

//patch
fetch('https://jsonplaceholder.typicode.com/todos/7',{
    method:'PATCH',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        title:'Sing a Song',
        
    })
})
.then(res=>console.log(res))
.catch(err=>{
    console.log(err)
})

//delete 

fetch('https://jsonplaceholder.typicode.com/todos/8',{
    method:"DELETE"
})
   
.then(res=>console.log(res))
.catch(err=>{
    console.log(err)
})

