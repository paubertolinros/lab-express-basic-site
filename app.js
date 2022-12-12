const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.status(200).sendFile(__dirname + '/views/index.html')
});

app.get('/about', (req, res, next) => {
  res.status(200).sendFile(__dirname + '/views/about.html')
})

app.get('/works', (req, res, next) => {
  res.status(200).sendFile(__dirname + '/views/works.html')
})

app.get('/photo-gallery', (req, res, next) => {
  res.status(200).sendFile(__dirname + '/views/photo-gallery.html')
} )

app.listen(3000, () => {
  console.log("hola 3000")
})