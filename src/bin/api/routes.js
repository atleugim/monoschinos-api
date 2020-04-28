const express = require('express')
      api = express.Router();

const { getLastest, getGendersAndLetters, animeSearch, getAnime, getEpisode, getAnimeByGender, getAnimeByLetter, ovaSearch } = require('./controller');

api.get('/', (req, res) => {
   res.status(200)
      .json({
         message: 'API Working!',
         endpoints: {
            lastest: '/anime/lastest',
            gendersAndLetters: '/animes/gendersAndLetters',
            searchAnime: '/anime/:id',
            searchEpisode: '/anime/episode/:id',
            searchByGender: '/anime/gender/:gender',
            searchByLetter: '/anime/letter/:letter',
            searchOva: '/ova/:page'
         },
         success: true
      })
})

api.get('/anime/lastest', (req, res) => {
   getLastest(req, res);
})

api.get('/animes/gendersAndLetters', (req, res) => {
   getGendersAndLetters(req, res);
})

// Search anime by name
api.get('/search/:name', (req, res) => {
   animeSearch(req, res);
})

api.get('/anime/:id', (req, res) => {
   getAnime(req, res);
})

api.get('/anime/episode/:id', (req, res) => {
   getEpisode(req, res);
})

api.get('/anime/gender/:gender', (req, res) => {
   getAnimeByGender(req, res);
})

api.get('/anime/letter/:letter', (req, res) => {
   getAnimeByLetter(req, res);
})

api.get('/ova/:page', (req, res) => {
   ovaSearch(req, res);
})

module.exports = api