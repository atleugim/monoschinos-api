const appConfig = {
   host: process.env.HOST || 'http://localhost',
   port: process.env.PORT || 3000
}

const apiConfig = {
   baseUrl: 'https://monoschinos2.com',
   searchAnime: 'https://monoschinos2.com/search?q=',
   viewAnime: 'https://monoschinos2.com/anime',
   viewEpisode: 'https://monoschinos2.com/ver',
   searchGender: 'https://monoschinos2.com/genero',
   searchLetter: 'https://monoschinos2.com/letra',
   searchOva: 'https://monoschinos2.com/categoria/ova'
}

module.exports = {
   appConfig,
   apiConfig
}