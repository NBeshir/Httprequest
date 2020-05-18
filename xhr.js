//xhr request

 const XMLHttpRequest = require("xhr2");
 const xhr = new XMLHttpRequest();
 
xhr.open('GET','https://jsonplaceholder.typicode.com/todos')
xhr.onload = ()=>{
    const data = JSON.parse(xhr.response);
    console.log(data);
}
xhr.send();

//post


xhr.open('POST','https://jsonplaceholder.typicode.com/todos')
    
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.onload = ()=>{
   
    const data = JSON.parse(xhr.response);
    console.log(data);
   
}
xhr.send('title=coding, completed:true');

//put

xhr.open('PUT','https://jsonplaceholder.typicode.com/todos/4')
xhr.onload = ()=>{
   
    const data = JSON.parse(xhr.response);
    console.log(data);
   
}
xhr.send('title=sewing');

//patch request

xhr.open('PATCH','https://jsonplaceholder.typicode.com/todos/4')
xhr.onload = ()=>{
   
    const data = JSON.parse(xhr.response);
    console.log(data);
   
}
xhr.send("title=cooking");

//delete

xhr.open('DELETE','https://jsonplaceholder.typicode.com/todos/4')
xhr.onload = ()=>{
   
    const data = JSON.parse(xhr.response);
    console.log(data);
   
}
xhr.send();