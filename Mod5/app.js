const { response } = require('express');
const express = require('express');

// express app--
const app = express();

//register view engine--
//app.set('views', 'myviews');
app.set('view engine', 'ejs');

//listen for requests--
app.listen(3000);

app.get('/', (req, res) => {
  const blogs = [
    { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
  ];
  //res.write();
  //res.send('<p>home page</p>');
  //res.sendFile('./views/index.html', {root: __dirname})  //<--The root/file/server we made.  Is this why I can't see localhost:3000?
  res.render('index.', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/about', (req, res) => {
  //res.write();
  //res.send('<p>home page</p>');
  res.sendFile('./views/about.html', { root: __dirname })  //<--The root/file/server we made.  Is this why I can't see localhost:3000?
});

////redirects--
//app.get('/about-us', (req, res) =>{
//res.redirect('/about');    
//});

//Get blogs
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new Blog' });
})
//404 page--
app.use((req, res) => {
  //res.status(404).sendFile('./views/404.html', {root: __dirname})
  res.status(404).render('404', { title: '404' });
});