const cheerio = require('cheerio'),
   axios = require('axios');

const {
   apiConfig
} = require('../config');

async function getLastest(req, res) {
   try {
      const bodyResponse = await axios.get(`${apiConfig.lastest}`);
      const $ = cheerio.load(bodyResponse.data);

      const animes = [];

      let getLastest = $('.container .caps .container')[0];
      getLastest = $(getLastest).find('.row article');

      $(getLastest).each((i, e) => {
         let el = $(e);
         let title = el.find('.Title').html().split('\t')[0]
         let img = el.find('.Image img').attr('src');
         let id = el.find('a').attr('href');
         id = id.split('/')[4]
         id = id.split('-')
         id.splice(id.length - 2, 2)
         id = id.join('-')
         let nEpisode = el.find('.dataEpi .episode').text();
         nEpisode = nEpisode.split('\n')[1]

         let anime = {
            title,
            img,
            id,
            nEpisode
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
      const bodyResponse = await axios.get(`${apiConfig.lastest}/animes`);
      const $ = cheerio.load(bodyResponse.data);

      const genders = []

      let gendersContainer = $('.filter-container .clearfix .float-left')[1];

      let genres = $(gendersContainer).find('.dropdown-menu .dropdown-item');

      genres.each((i, e) => {
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
      const bodyResponse = await axios.get(`${apiConfig.lastest}/animes`);
      const $ = cheerio.load(bodyResponse.data);

      const letters = []

      let lettersContainer = $('.filter-container .clearfix .float-left')[3];
      let letts = $(lettersContainer).find('.dropdown-menu .dropdown-item');

      letts.each((i, e) => {
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

      let genres = []
      let episodes = []
      $('.container .mt-2 .row').each((i, e) => {
         let el = $(e);
         genres.push(el.find('.col-sm-9 .generos a').html())
         genres.push(el.find('.col-sm-9 .generos a').next().html())
         let title = el.find('.col-sm-9 h1.Title').text(),
            description = el.find('.col-sm-9 .Description p').text(),
            status = el.find('.col-sm-9 .Type').text().trim(),
            img = el.find('.Image img').attr('src');

         anime = {
            title,
            description,
            status,
            genres,
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

async function getEpisode(req, res) {
   try {
      let {
         id
      } = req.params;

      const bodyResponse = await axios.get(`${apiConfig.viewEpisode}/${id}`);
      const $ = cheerio.load(bodyResponse.data);

      // Get video link OP1
      let video = $('.Episode .content .row .TPlayer #Opt1 iframe').attr('src');

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

      let download = $('.Episode .content .row #downloads .table tbody tr td')[2];
      download = $(download).find('a').attr('href');

      res.status(200)
         .json({
            video,
            download,
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

async function getAnimeByGender(req, res) {
   try {
      let {
         gender
      } = req.params;

      const bodyResponse = await axios.get(`${apiConfig.searchGender}/${gender}`);
      const $ = cheerio.load(bodyResponse.data);

      const animes = [];

      $('.animes .container .row article').each((i, e) => {
         let el = $(e);
         let id = el.find('.link-anime').attr('href');
         id = id.split('/')[4];
         let img = el.find('.link-anime .Image img').attr('src');
         let title = el.find('.link-anime .Title').text();

         let anime = {
            id,
            img,
            title
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

async function getAnimeByLetter(req, res) {
   try {
      let {
         letter
      } = req.params;

      const bodyResponse = await axios.get(`${apiConfig.searchLetter}/${letter}`);
      const $ = cheerio.load(bodyResponse.data);

      const animes = [];

      $('.animes .container .row article').each((i, e) => {
         let el = $(e);
         let id = el.find('.link-anime').attr('href');
         id = id.split('/')[4];
         let img = el.find('.link-anime .Image img').attr('src');
         let title = el.find('.link-anime .Title').text();

         let anime = {
            id,
            img,
            title
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

      res.status(200)
         .json({
            ovas,
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
   animeSearch,
   getAnime,
   getEpisode,
   getAnimeByGender,
   getAnimeByLetter,
   ovaSearch
}