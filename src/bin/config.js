const appConfig = {
   host: process.env.HOST,
   port: process.env.PORT
}

const apiConfig = {
   baseUrl: 'https://monoschinos.com',
   searchAnime: 'https://monoschinos.com/search?q=',
   viewAnime: 'https://monoschinos.com/anime',
   viewEpisode: 'https://monoschinos.com/ver',
   searchGender: 'https://monoschinos.com/genero',
   searchLetter: 'https://monoschinos.com/letra',
   searchOva: 'https://monoschinos.com/categoria/ova'
}

module.exports = {
   appConfig,
   apiConfig
}