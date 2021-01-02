const appConfig = {
   host: process.env.HOST || 'http://localhost',
   port: process.env.PORT || 3000
}

const siteUrl = 'https://monoschinos2.com';

const apiConfig = {
   baseUrl: siteUrl,
   searchAnime: `${siteUrl}/search?q=`,
   viewAnime: `'${siteUrl}/anime`,
   viewEpisode: `${siteUrl}/ver`,
   searchGender: `${siteUrl}/genero`,
   searchLetter: `${siteUrl}/letra`,
   searchOva: `${siteUrl}/categoria/ova`
}

module.exports = {
   appConfig,
   apiConfig
}