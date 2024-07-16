const getPost=async()=>{
    try{
    let resdata = await fetch('https://jsonplaceholder.typicode.com/posts');4
    let data = await resdata.json();
    console.log(data);
    }
    catch(error){
        return error;
    }
}

console.log(getPost());