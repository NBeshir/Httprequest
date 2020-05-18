
//using Axios
    
const axios = require('axios');

//get request
    
axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res=>{
        console.log(res.data)

    })
   
    .catch(err=>{
       console.log(err)
    })

    //post request

    axios.post('https://jsonplaceholder.typicode.com/todos',
            {
                title:'read'
            }



            )
            .then(res=>{
                console.log(res.data)
            
            })
            .catch(err=>{
                console.log(err)
            })

            //put request

    axios.put('https://jsonplaceholder.typicode.com/todos/1',{
        title:'excercise'
    })
    .then(res=>{
        console.log(res.data)

    })
   
    .catch(err=>{
       console.log(err)
    })
    
    //patch request

    axios.patch('https://jsonplaceholder.typicode.com/todos/3',{
        title:'clean'
    })
       
    
    .then(res=>{
        console.log(res.data)

    })
   
    .catch(err=>{
       console.log(err)
    })

    //delete request
    
axios.delete('https://jsonplaceholder.typicode.com/todos/4')
.then(res=>res.json())
.then(data=>{
    console.log(data)
   
})
.catch(err=>{
    console.log(err)
})


