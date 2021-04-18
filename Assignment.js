var fs = require ('fs');
const https = require('https');
const fetch =require('node-fetch');
// Fetching the data 
fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        fs.writeFile('./result/posts.json', JSON.stringify(data), (err) => {
        if (err) throw err
        console.log('Assignment file created successfully');
    })
});