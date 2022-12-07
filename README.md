# Monoschinos-API (v1.0.8) (No longer maintained)

:fire: **API** built to extract data from monoschinos2.com by web scrapping, get all animes subtitled in spanish.

## **Tools**

- [x] axios
- [x] cheerio
- [x] cors
- [x] dotenv
- [x] express
- [x] morgan
- [x] nodemon

---

## **Usage**

> **Install**

```bash
$ git clone https://github.com/atleugim/monoschinos-api.git

$ npm install
```

> **Run server with _NODE_**:

```bash
$ npm run start
```

> **Run server with _NODEMON_**:

```bash
$ npm run dev
```

---

## **Endpoints**

> **BASE_URL:**

```bash
$ http://localhost:3000/api/v1
```

#

> Method: **GET** \
> Route: **/latest**

```js
// return latest episodes added to the site
   "animes": [
      {
         "title": "Toaru Kagaku no Railgun T",
         "img": "https://monoschinos.com/image/episode/290/165/toaru-kagaku-no-railgun-t-13.jpg",
         "id": "toaru-kagaku-no-railgun-t-episodio-13",
         "nEpisode": 13
      },
      {
         "title": "Kemono Friends: Youkoso Japari Park e!",
         "img": "https://monoschinos.com/image/episode/290/165/kemono-friends-youkoso-japari-park-e-26.jpg",
         "id": "kemono-friends-youkoso-japari-park-e-episodio-26",
         "nEpisode": 26
      },
      // ...
   ],
   "success": true
```

> Method: **GET** \
> Route: **/search/:input**

```js
// return animes wich name contains the input search
   "animes": [
       {
         "title": "Toradora!",
         "id": "toradora-sub-espanol",
         "img": "https://monoschinos.com/image/imagen/160/224/toradora.jpg"
       },
       {
         "title": "Toradora!: SOS!",
         "id": "toradora-sos-sub-espanol",
         "img": "https://monoschinos.com/image/imagen/160/224/toradora-sos.jpg"
       },
       {
         "title": "Toradora!: Bentou no Gokui",
         "id": "toradora-bentou-no-gokui-sub-espanol",
         "img": "https://monoschinos.com/image/imagen/160/224/toradora-bentou-no-gokui.jpg"
       },
       // ...
   ],
   "success": true
```

#

> Method: **GET** \
> Route: **/genders**

```js
// return all genders options for gender search
   "genders": [
      {
         "title": "Todo"
      },
      {
         "title": "Acción",
         "id": "accion"
      },
      {
         "title": "Aventura",
         "id": "aventura"
      },
      // ...
   ],
   "success": true
```

#

> Method: **GET** \
> Route: **/letters**

```js
// return all letters options for letter search
   "letters": [
      {
         "title": "Todo"
      },
      {
         "title": "#",
         "id": "0-9"
      },
      {
         "title": "A",
         "id": "a"
      },
      {
         "title": "B",
         "id": "b"
      },
      // ...
   ]
   "success": true
```

#

> Method: **GET** \
> Route: **/categories**

```js
// return all categories options for category search
   "categories": [
      {
         "title": "Todo"
      },
      {
         "title": "Anime",
         "id": "anime"
      },
      {
         "title": "Ova",
         "id": "ova"
      },
      // ...
   ]
   "success": true
```

#

> Method: **GET** \
> Route: **/anime/:id**

```js
// return a single anime information
   "anime": {
      "title": "Toradora! Sub Español",
      "description": "Ryuuji Takasu es un estudiante...",
      "status": "Finalizado",
      "genders": [
         {
           "title": "Comedia",
           "id": "comedia"
         },
         {
           "title": "Escolares",
           "id": "escolares"
         },
         // ...
       ],
      "img": "https://monoschinos.com/assets/img/serie/imagen/toradora.jpg",
      "episodes": [
         {
            "episode": 25,
            "id": "toradora-episodio-25"
         },
         {
            "episode": 24,
            "id": "toradora-episodio-24"
         },
         // ...
      ]
   },
   "success": true
```

#

> Method: **GET** \
> Route: **/episode/:id**

```js
   // return a single episode video information with multiple video an download options
   "title": "Toradora! 1 Sub Español",
   "animeId": "toradora-sub-espanol",
   "epNumber": 1,
   "videos": [
      "https://www.fembed.com/v/dkjjktxwdl6jnr5",
      "https://clipwatching.com/embed-6rswzfw05oqr.html",
      "https://uqload.com/embed-jpj31oi3ksjj.html",
      "https://videobin.co/embed-c44qc9a4nox5.html",
      "https://www.mp4upload.com/embed-409yelco3k8w.html",
      "https://ok.ru/videoembed/1893674191409"
   ],
   "downloads": [
      "https://mega.nz/#!f6JzRASL!8SRmVCgGWpB1Ap_VtTqrh8NQw8cB_h5BaK7SvpkTWpU",
      "https://www.solidfiles.com/v/R4BejD7LQjvQR",
      "https://bayfiles.com/9b00AaLcn6",
      "https://1fichier.com/?rf29pge5b69snktt7bcl"
   ],
   "success": true
```

#

> Method: **GET** \
> Route: **/gender/:id?page=${page}**

```js
// return animes wich contains the input gender and within the 'page' query, if no 'page' query provided, default page is 1, also returns the page count available for search
   "animes": [
      {
         "id": "hidan-no-aria-sub-espanol",
         "img": "https://monoschinos.com/image/imagen/160/224/hidan-no-aria.jpg",
         "title": "Hidan no Aria"
      },
      {
         "id": "dorohedoro-ma-no-omake-sub-espanol",
         "img": "https://monoschinos.com/image/imagen/160/224/dorohedoro-ma-no-omake.png",
         "title": "Dorohedoro: Ma no Omake"
      },
      // ...
   ],
   "pages": 45,
   "success": true
```

#

> Method: **GET** \
> Route: **/letter/:letter?page=${page}**

```js
// return animes wich contains the input letter and within the 'page' query, if no 'page' query provided, default page is 1, also returns the page count available for search
   "animes": [
      {
         "id": "tv-yarou-nanaana-kaibutsu-kraken-wo-oe-sub-espanol",
         "img": "https://monoschinos.com/image/imagen/160/224/tv-yarou-nanaana-kaibutsu-kraken-wo-oe.jpg",
         "title": "TV Yarou Nanaana: Kaibutsu Kraken wo Oe!"
      },
      {
         "id": "tsugumomo-segunda-temporada-sub-espanol",
         "img": "https://monoschinos.com/image/imagen/160/224/tsugumomo-segunda-temporada.jpg",
         "title": "Tsugumomo Segunda temporada"
      },
      // ...
   ],
   "pages": 7,
   "success": true
```

#

> Method: **GET** \
> Route: **/category/:category?page=${page}**

```js
// return animes wich contains the input category and within the 'page' query, if no 'page' query provided, default page is 1, also returns the page count available for search
   "animes": [
      {
         "id": "kaijuu-no-kodomo-espiritus-del-mar-latino-sub-espanol",
         "img": "https://monoschinos.com/image/imagen/160/224/kaijuu-no-kodomo-espiritus-del-mar-latino.png",
         "title": "Kaijuu no Kodomo (Espíritus del Mar) Latino"
      },
      {
         "id": "hello-world-sub-espanol",
         "img": "https://monoschinos.com/image/imagen/160/224/hello-world.jpg",
         "title": "Hello World"
      },
      // ...
   ],
   "pages": 15,
   "success": true
```

#

> Method: **GET** \
> Route: **/category/:category/gender/:gender?page=${page}**

```js
// return animes wich name contains the input category and the input gender within the 'page' query, if no 'page' query, default page is 1, also returns the page count available for search
   "animes": [
      {
         "id": "dorohedoro-ma-no-omake-sub-espanol",
         "img": "https://monoschinos.com/image/imagen/160/224/dorohedoro-ma-no-omake.png",
         "title": "Dorohedoro: Ma no Omake"
      },
      {
         "id": "strike-the-blood-iv-sub-espanol",
         "img": "https://monoschinos.com/image/imagen/160/224/strike-the-blood-iv.jpg",
         "title": "Strike the Blood IV"
      },
      // ...
   ],
   "pages": 5,
   "success": true
```

#

> Method: **GET** \
> Route: **/ovas/:${page}**

```js
// return ovas by page and total count of pages, because in site can't search ovas by input # is a param for page request
   "ovas": [
      {
         "id": "strike-the-blood-iv-sub-espanol",
         "img": "https://monoschinos.com/image/imagen/160/224/strike-the-blood-iv.jpg",
         "title": "Strike the Blood IV"
      },
      // ...
   ],
   "pages": 13,
   "success": true
```

## **Author**

> Miguel Vega
