const express = require('express');
const app = express();
const hbs = require('hbs');


app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');/*app.set('views', path.join(__dirname, 'views'));*/
hbs.registerPartials(__dirname + '/views/partials');

  const data =   [{
    name: 'Cottonbro CG Studio',
    image: '/img/cottonbro-cg-studio.jpg',
  },
  {
    name: 'Rodion Kutsaiev',
    image: '/img/rodion-kutsaiev.jpg',
  },
  {
    name: 'UZUNOV ROSTISLAV',
    image: '/img/uzunov-rostislav.jpg',
    },
  {
    name: 'STEVE JOHNSON',
    image: '/img/steve-johnson.jpg',
  }
]

app.get('/', (req, res, next) => {
  res.status(200).render('index')
});

app.get('/about', (req, res, next) => {
  res.status(200).render('about')
})

app.get('/works', (req, res, next) => {
  res.status(200).render('works')
})

app.get('/photo-gallery', (req, res, next) => {
  res.status(200).render('photo-gallery')
})

app.get('/related', (req, res, next) => {
  
  res.status(200).render('related', { data })
})
/*HELPER UPPERCASE*/
hbs.registerHelper('toUpperCase', function(str) {
  return str.toUpperCase();
});

app.listen(3002, () => {
  console.log("hola 3000")
})