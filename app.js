const express = require('express');
const app = express();
const hbs = require('hbs');


app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views')/*app.set('views', path.join(__dirname, 'views'));*/
hbs.registerPartials(__dirname + '/views/partials');

  const data =   [{
    name: 'Pinkscape 01',
    image: '/img/img1.jpg',
    description: 'blblblblbllblb!',
    Rate: '🖤🖤🖤'
  },
  {
    name: 'Pinkscape 03',
    image: 'https://cuevadelobo.com/wp-content/uploads/2018/12/Fallout-Juego-de-Mesa-Personajes-y-Tablero-1024x683.jpg',
    description: 'jdbkjsdbkjabdkjad',
    Rate:  '🖤🖤🖤'
  },
  {
    name: 'Pinkscape 05',
    image: 'https://i.gzn.jp/img/2020/05/09/diceforge-rebellion/00.jpg',
    description: 'jdbkjsdbkjabdkjad',
  },
  {
    name: 'Pinkscape 10',
    image: 'https://www.the-forge.it/wp-content/uploads/2020/08/zombicide-dark-side-03-1024x576.jpg',
    description: 'jdbkjsdbkjabdkjad',
    maxPlayers: 6
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

app.get('/tests', (req, res, next) => {
  res.status(200).render('tests', { data })
} )

app.listen(3000, () => {
  console.log("hola 3000")
})