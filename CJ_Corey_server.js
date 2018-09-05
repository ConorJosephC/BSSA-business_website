// Assignment 8 Static Website on Node.js
//
// Instructions
// - Take the website that you built previously, and create a new branch on git so the old version is still available for grading / reviewing.
// - Put your website on a Node.js server, so that it can be reached at http://localhost:3000.
// - Your Node.js server does not need any routes, since the entire website is static content.
// - Check each of your links and images to ensure that they still work.
// - Express by default looks for `index.html` for the first page.
//
// Important Notes
// - Remember to add "node_modules" to your .gitignore file. Otherwise, a lot of other people's code is going to end up in your repository.
// - If you did not originally create the repo, you must "fork" it on github, which will make a copy and put it on your github.
// - express.static() looks for 'index.html' by default, so rename your home page to that. Alternatively, serve a different default file using the following syntax:
//
// app.use(express.static('myStaticPath', {
//     index: 'myNonDefaultHomepage.html'
// }));

const express = require('express');
const app = express();

// app.get('/', function (request, response) {
//   response.send('your very first server. good work!');
// });

app.use(express.static('public', {
    index: 'about.html'
}));

app.get('/', (req, res) => res.sendFile(__dirname + '/about.html'))

// app.use(express.static('public'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
