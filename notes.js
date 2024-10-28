// write a function to retrieve a blob of json 
// make an ajax request Use the 'fetch' function 

// function fetchData() {
//     fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(json => console.log(json));
// }

// does not inherit this and is hoisted
// async function fetchData() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const json = await res.json();
//     console.log(json);
// }


// is not hoisted and inherits this
// const fetchData = async()=>{
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const json = await res.json();
//         console.log(json);
// }

// fetchData();