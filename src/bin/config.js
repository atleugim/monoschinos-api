// const appConfig = {
//    host: process.env.HOST | 'localhost',
//    port: process.env.PORT | '4000'
// }
const appConfig = {
   host: 'localhost',
   port: '4000'
}

const apiConfig = {
   baseUrl: 'https://monoschinos2.com',
   emisionAnimes: 'https://monoschinos2.com/emision',
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