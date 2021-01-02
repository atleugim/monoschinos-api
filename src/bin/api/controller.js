const cheerio = require('cheerio'),
   axios = require('axios');

const {
   apiConfig
} = require('../config');

async function getLastest(req, res) {
   try {
      const bodyResponse = await axios.get(`${apiConfig.baseUrl}`);
      const $ = cheerio.load(bodyResponse.data);

      const animes = [];

      let getLastest = $('.container .caps .container')[0];

      $(getLastest).find('.row article').each((i, e) => {
         let el = $(e);
         let title = el.find('.Title').html().split('\t')[0]
         let img = el.find('.Image img').attr('src');
         let type = el.find('.Image figure span').text();
         type = type.substring(1, type.length)
         let nEpisode = el.find('.dataEpi .episode').text();
         nEpisode = parseInt(nEpisode.split('\n')[1])
         let id = el.find('a').attr('href');
         id = id.split('/')[4]
         id = id.split('-')
         id.splice(id.length - 2, 2);
         id = `${id.join('-')}-episodio-${nEpisode}`;


         let anime = {
            title,
            img,
            id,
            nEpisode,
            type
         }

         animes.push(anime);
      })

      res.status(200)
         .json({
            animes,
            success: true
         })

   } catch (err) {
      res.status(500)
         .json({
            message: err.message,
            success: false
         })
   }
}

async function getGenders(req, res) {
   try {
      const bodyResponse = await axios.get(`${apiConfig.baseUrl}/animes`);
      const $ = cheerio.load(bodyResponse.data);

      const genders = []

      let gendersContainer = $('.filter-container .clearfix .float-left')[1];

      $(gendersContainer).find('.dropdown-menu .dropdown-item')
         .each((i, e) => {
            let el = $(e)

            let title = el.text();
            if (title.charAt() == ' ') {
               title = title.substring(1, title.length)
            }
            let id = el.attr('href');
            id = id.split('/')[2];
            let gender = {
               title,
               id
            }
            genders.push(gender)
         })

      res.status(200)
         .json({
            genders,
            success: true
         })

   } catch (err) {
      res.status(500)
         .json({
            message: err.message,
            success: false
         })
   }
}

async function getLetters(req, res) {
   try {
      const bodyResponse = await axios.get(`${apiConfig.baseUrl}/animes`);
      const $ = cheerio.load(bodyResponse.data);

      const letters = []

      let lettersContainer = $('.filter-container .clearfix .float-left')[3];
      $(lettersContainer).find('.dropdown-menu .dropdown-item')
         .each((i, e) => {
            let el = $(e)

            let title = el.text();
            // if (title.charAt() == ' ') {
            //    title = title.substring(1, title.length)
            // }
            let id = el.attr('href');
            id = id.split('/')[2];
            let letter = {
               title,
               id
            }
            letters.push(letter)
         })

      res.status(200)
         .json({
            letters,
            success: true
         })

   } catch (err) {
      res.status(500)
         .json({
            message: err.message,
            success: false
         })
   }
}

async function getCategories(req, res) {
   try {
      const bodyResponse = await axios.get(`${apiConfig.baseUrl}/animes`);
      const $ = cheerio.load(bodyResponse.data);

      const categories = []

      let categoriesContainer = $('.filter-container .clearfix .float-left')[0];
      $(categoriesContainer).find('.dropdown-menu .dropdown-item')
         .each((i, e) => {
            let el = $(e)

            let title = el.text();

            let id = el.attr('href');
            id = id.split('/')[2];
            let category = {
               title,
               id
            }
            categories.push(category)
         })

      res.status(200)
         .json({
            categories,
            success: true
         })
   } catch (err) {
      res.status(500)
         .json({
            message: err.message,
            success: false
         })
   }
}

async function animeSearch(req, res) {
   try {
      let {
         name
      } = req.params;

      const bodyResponse = await axios.get(`${apiConfig.searchAnime}${name}`);
      const $ = cheerio.load(bodyResponse.data);

      const animes = [];

      $('.animes .row article').each((i, e) => {
         let el = $(e);
         let title = el.find('h3.Title').text(),
            img = el.find('div.Image .cover .img-fluid').attr('src'),
            id = el.find('a.link-anime').attr('href');
         id = id.split('/')[4];

         let anime = {
            title,
            id,
            img
         }

         animes.push(anime);
      })

      res.status(200)
         .json({
            animes,
            success: true
         })

   } catch (err) {
      res.status(500)
         .json({
            message: err.message,
            success: false
         })
   }
}

async function getAnime(req, res) {
   try {
      let {
         id
      } = req.params;

      const bodyResponse = await axios.get(`${apiConfig.viewAnime}/${id}`);
      const $ = cheerio.load(bodyResponse.data);

      let anime = new Object();

      let genders = []
      let episodes = []
      $('.container .mt-2 .row').each((i, e) => {
         let el = $(e);

         el.find('.col-sm-9 .generos a').each((i, e) => {
            let el = $(e);

            let title = el.text();
            let id = el.attr('href').split('/')[4]
            let gender = {
               title,
               id
            }

            genders.push(gender)
         })

         let title = el.find('.col-sm-9 h1.Title').text();
         let description = el.find('.col-sm-9 .Description p').text();
         let status = el.find('.col-sm-9 .Type').text().trim();
         let img = el.find('.Image img').attr('src');

         anime = {
            title,
            description,
            status,
            genders,
            img,
            id
         }
      })

      $('.container .SerieCaps').each((i, e) => {
         let el = $(e);
         let totalEpisodes = el.children().length;

         $('.container .SerieCaps .item').each((i, e) => {
            let el = $(e);
            let episodeId = el.attr('href');
            episodeId = episodeId.split('/')[4]
            let episode = {
               episode: totalEpisodes,
               id: episodeId
            }

            episodes[i] = episode;

            anime.episodes = episodes
            totalEpisodes--
         })
      })

      if (!anime.episodes) {
         anime.episodes = []
      }

      res.status(200)
         .json({
            anime,
            success: true
         })

   } catch (err) {
      res.status(500)
         .json({
            message: err.message,
            success: false
         })
   }
}

async function getAnimes(req, res) {
   try {
      let {
         page
      } = req.query;

      if (!page) {
         page = 1
      }

      const bodyResponse = await axios.get(`${apiConfig.baseUrl}/animes?page=${page}`);
      const $ = cheerio.load(bodyResponse.data);

      const animes = [];

      $('.animes .container .row article').each((i, e) => {
         let el = $(e);

         let id = el.find('a').attr('href');
         id = id.split('/')[4]
         let title = el.find('.Title').text();
         let img = el.find('.Image img').attr('src');
         let category = el.find('.category').text();
         category = category.substring(1, category.length)
         let year = parseInt(el.find('.fecha').text());

         const anime = {
            id,
            title,
            img,
            category,
            year
         }

         animes.push(anime);
      })

      let totalPages = $('.pagination').children().length;
      totalPages = $('.pagination').find('.page-item')[totalPages - 2];
      let pages = parseInt($(totalPages).text());

      res.status(200)
         .json({
            animes,
            pages,
            success: true
         })

   } catch (err) {
      res.status(500)
         .json({
            message: err.message,
            success: false
         })
   }
}

async function getEpisode(req, res) {
   try {
      let {
         id
      } = req.params;

      const bodyResponse = await axios.get(`${apiConfig.viewEpisode}/${id}`);
      const $ = cheerio.load(bodyResponse.data);

      // Get video link OP1
      let title = $('.Episode .Title-epi').text();
      let animeId = id.split('-');

      if (animeId.includes('episodio')) {
         animeId = animeId.splice(0, animeId.length - 2).join('-');
      } else {
         animeId = animeId.splice(0, animeId.length - 1)
      }
      animeId = `${animeId}-sub-espanol`;
      let splittedTitle = title.trim().split(' ');

      let epNumber = 0;

      if (splittedTitle.includes('sub') || splittedTitle.includes('Sub')) {
         epNumber = splittedTitle[splittedTitle.length - 3];
      } else {
         epNumber = splittedTitle[splittedTitle.length - 1];
      }

      const videos = [];
      let videosContainer = $('.Episode .content .row .TPlayer').text();

      $(videosContainer).each((i, e) => {
         let el = $(e);

         let video = el.attr('src');

         if (video) {
            video = video.split('url=')[1]
            video = decodeURIComponent(video)
            video = video.split('&id')[0]
         }


         if (video) {
            videos.push(video)
         }

      })

      // res.send(videos)
      /* Old
         video1 = video1.split('=')[1];
         video1 = video1.split('&')[0];
         // DecodeURIComponent to set right link format
         video1 = decodeURIComponent(video1);

         // Get JW-Player DOM
         const videoRes1 = await axios.get(video1);
         let $v1 = cheerio.load(videoRes1.data);
         // Destructuring JW-Player DOM by String methods to get the source link
         let vidString1 = $v1.html().toString();
         let strStartV1 = vidString1.search('sources'),
            strEndV1 = vidString1.search(']');
         let sources1 = vidString1.substring(strStartV1, strEndV1 + 1);

         let vidSource1 = sources1.split("'")[1]
      */

      let downloads = [];
      let downloadsContainer = $('.Episode .content .row #downloads table tbody tr');

      $(downloadsContainer).each((i, e) => {
         let el = $(e);

         let download = el.find('a').attr('href')

         if (download) {
            downloads.push(download);
         }
      })

      res.status(200)
         .json({
            title,
            animeId,
            epNumber,
            videos,
            downloads,
            success: true
         })

   } catch (err) {
      res.status(500)
         .json({
            message: err.message,
            success: false
         })
   }
}

async function getBy(req, res, multiple) {
   try {
      let {
         gender,
         letter,
         category
      } = req.params;

      let {
         page
      } = req.query;

      if (!page) {
         page = 1
      }

      let bodyResponse;

      if (multiple) {
         bodyResponse = await axios.get(`${apiConfig.baseUrl}/categoria/${category}/genero/${gender}?page=${page}`);
      } else if (gender && !multiple) {
         bodyResponse = await axios.get(`${apiConfig.baseUrl}/genero/${gender}?page=${page}`);
      } else if (letter && !multiple) {
         bodyResponse = await axios.get(`${apiConfig.baseUrl}/letra/${letter}?page=${page}`);
      } else if (category && !multiple) {
         bodyResponse = await axios.get(`${apiConfig.baseUrl}/categoria/${category}?page=${page}`);
      }
      const $ = cheerio.load(bodyResponse.data);

      const animes = [];

      $('.animes .container .row article').each((i, e) => {
         let el = $(e);
         let id = el.find('.link-anime').attr('href');
         id = id.split('/')[4];
         let img = el.find('.link-anime .Image img').attr('src');
         let title = el.find('.link-anime .Title').text();
         let type = el.find('.link-anime .info .category').text();
         let year = el.find('.link-anime .info .fecha').text();

         let anime = {
            id,
            img,
            title,
            type,
            year
         }

         animes.push(anime);

      })

      let totalPages = $('.pagination').children().length;
      totalPages = $('.pagination').find('.page-item')[totalPages - 2];
      let pages = parseInt($(totalPages).text());

      res.status(200)
         .json({
            animes,
            pages,
            success: true
         })

   } catch (err) {
      res.status(500)
         .json({
            message: err.message,
            success: false
         })
   }
}

async function ovaSearch(req, res) {
   try {
      let {
         page
      } = req.params;

      const bodyResponse = await axios.get(`${apiConfig.searchOva}?page=${page}`);
      const $ = cheerio.load(bodyResponse.data);

      const ovas = [];

      $('.animes .container .row article').each((i, e) => {
         let el = $(e);
         let id = el.find('.link-anime').attr('href');
         id = id.split('/')[4];
         let img = el.find('.link-anime .Image img').attr('src');
         let title = el.find('.link-anime .Title').text();


         let ova = {
            id,
            img,
            title
         }

         ovas.push(ova);

      })

      let totalPages = $('.pagination').find('.page-item')[7];
      totalPages = parseInt($(totalPages).text())

      res.status(200)
         .json({
            ovas,
            pages: totalPages,
            success: true
         })

   } catch (err) {
      res.status(500)
         .json({
            message: err.message,
            success: false
         })
   }
}

module.exports = {
   getLastest,
   getGenders,
   getLetters,
   getCategories,
   animeSearch,
   getAnime,
   getAnimes,
   getEpisode,
   getBy,
   ovaSearch
}