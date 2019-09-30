const express = require('express');
const path = require('path'); // path lets us navigate file system / folders
const hbs = require('hbs');

// heroku assigns a port wheni it deploys via the process (environment variables - comin)
// locally this will run @ port 3000; remotely it'll run wherever heroku tells it to run
const port = process.env.PORT || 3000; // a double pipe means "or"

const app = express();

app.use(express.static('public'));

// tell express to use the handlebars engine to render data
app.set('view engine', 'hbs');

// tell express to use the views folder to find its templates
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  console.log('at the home route');
  // res.sendFile(path.join(__dirname + '/views/index.html'));

  res.render('home', {message: "hi there!", anothermessage: "This is easy"} );
  // this builds localhost:3000/views/index.html
})

app.get('/contact', (req, res) => {
  console.log('at the contact route');
  //res.sendFile(path.join(__dirname + '/views/contact.html'));
  // this builds localhost:3000/views/contact.html

  res.render('contact', {message: "hello"} );
})

app.get('/portfolio', (req, res) => {
  console.log('at the portfolio route');
  res.sendFile(path.join(__dirname + '/views/portfolio.html'));
  // this builds localhost:3000/views/portfolio.html
})

app.listen(port,  () => {
  console.log(`Server running at ${port}/`);
});