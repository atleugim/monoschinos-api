const express = require('express')
api = express.Router();

const {
   getLastest,
   getGenders,
   getLetters,
   getCategories,
   animeSearch,
   getAnime,
   getEpisode,
   getBy,
   ovaSearch
} = require('./controller');

api.get('/', (req, res) => {
   res.status(200)
      .json({
         message: 'API Working!',
         author: 'Miguel Vega',
         githubRepository: 'https://github.com/atleugim/monoschinos-api',
         endpoints: {
            lastest: '/animes/lastest',
            search: '/search/:name',
            getGenders: '/genders',
            getLetters: '/letters',
            getCategories: '/categories',
            getAnime: '/anime/:id',
            getEpisode: '/episode/:id',
            searchByGender: '/gender/:gender',
            searchByLetter: '/letter/:letter',
            searchByCategory: '/category/:category',
            getMultiple: '/category/:category/gender/:gender',
            searchOva: '/ovas/:page'
         },
         success: true,
      })
})

api.get('/animes/lastest', (req, res) => {
   getLastest(req, res);
})

api.get('/animes/gendersAndLetters', (req, res) => {
   getGendersAndLetters(req, res);
})

api.get('/genders', (req, res) => {
   getGenders(req, res);
})

api.get('/letters', (req, res) => {
   getLetters(req, res);
})

api.get('/categories', (req, res) => {
   getCategories(req, res);
})

// Search anime by name
api.get('/search/:name', (req, res) => {
   animeSearch(req, res);
})

api.get('/anime/:id', (req, res) => {
   getAnime(req, res);
})

api.get('/episode/:id', (req, res) => {
   getEpisode(req, res);
})

api.get('/gender/:gender', (req, res) => {
   getBy(req, res);
})

api.get('/letter/:letter', (req, res) => {
   getBy(req, res);
})

api.get('/category/:category', (req, res) => {
   getBy(req, res);
})

api.get('/category/:category/gender/:gender', (req, res) => {
   getBy(req, res, true)
})

api.get('/ovas/:page', (req, res) => {
   ovaSearch(req, res);
})

module.exports = api