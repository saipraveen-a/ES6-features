
// Fetch makes an API call and returns a Promise.

// GET
fetch('https://jsonplaceholder.typicode.com/comments/1')
.then(response => response.json())
.then(data => console.log(data))


// POST
fetch('https://jsonplaceholder.typicode.com/comments', {
        method: "POST",
        body: JSON.stringify({
            postId: 1,
            name: 'Sai',
            email: 'somemail@gmail.com',
            body: 'How are you!'
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))