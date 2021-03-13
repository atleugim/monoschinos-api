const express = require('express')
api = express.Router();

const {
   getLastest,
   getEmision,
   getGenders,
   getLetters,
   getCategories,
   animeSearch,
   getAnime,
   getAnimes,
   getEpisode,
   getBy,
   ovaSearch
} = require('./controller');

api.get('/', (_, res) => {
   res.status(200)
      .json({
         message: 'API Working!',
         author: 'Miguel Vega',
         repository: 'https://github.com/atleugim/monoschinos-api.git',
         contributors: [
            {
               username: "@carlos-burelo",
               profile: "https://github.com/carlos-burelo"
            }
         ],
         endpoints: {
            latest: '/latest',
            getEmision: '/emision',
            search: '/search/:name',
            getGenders: '/genders',
            getLetters: '/letters',
            getCategories: '/categories',
            getAnime: '/anime/:id',
            getAnimes: '/animes?page=${n}',
            getEpisode: '/episode/:id',
            searchByGender: '/gender/:gender?page=${n}',
            searchByLetter: '/letter/:letter?page=${n}',
            searchByCategory: '/category/:category?page=${n}',
            getMultiple: '/category/:category/gender/:gender?page=${n}',
            searchOva: '/ovas/:page'
         },
         success: true,
      })
})

api.get('/latest', (req, res) => getLastest(req, res))

api.get('/emision', (req, res) => getEmision(req, res))

api.get('/animes/gendersAndLetters', (req, res) => getGendersAndLetters(req, res))

api.get('/genders', (req, res) => getGenders(req, res))

api.get('/letters', (req, res) => getLetters(req, res))

api.get('/categories', (req, res) => getCategories(req, res))

api.get('/search/:name', (req, res) => animeSearch(req, res))

api.get('/anime/:id', (req, res) => getAnime(req, res))

api.get('/animes', (req, res) => getAnimes(req, res))

api.get('/episode/:id', (req, res) => getEpisode(req, res))

api.get('/gender/:gender', (req, res) => getBy(req, res))

api.get('/letter/:letter', (req, res) => getBy(req, res))

api.get('/category/:category', (req, res) => getBy(req, res))

api.get('/category/:category/gender/:gender', (req, res) => getBy(req, res, true))

api.get('/ovas/:page', (req, res) => ovaSearch(req, res))

module.exports = api