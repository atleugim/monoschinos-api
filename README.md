# Monoschinos-API (v1.0.6)
:fire: **API** built to extract data from Monoschinos.com by web scrapping, get all animes subtitled in spanish. \

### Try it here: **[Monoschinos-API](https://monoschinos-api.herokuapp.com/api/v1)**

****

## **Tools**

- [x] axios
- [x] cheerio
- [x] cors
- [x] dotenv
- [x] express
- [x] morgan
- [x] nodemon

****

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

****

## **Endpoints**

> **BASE_URL:**
```bash
$ http://localhost:3000/api/v1
```

#

>Method: **GET** \
> Route: **/animes/lastest**

```js
// return lastest episodes added to the site
   "animes": [
    {
      "title": "Heya Camp: Sauna to Gohan to Miwa Bike",
      "img": "https://monoschinos.com/image/portada/290/165/heya-camp-sauna-to-gohan-to-miwa-bike.jpg",
      "id": "heya-camp-sauna-to-gohan-to-miwa-bike-sub-espanol",
      "nEpisode": "1"
    },
    {
      "title": "Plunderer",
      "img": "https://monoschinos.com/image/portada/290/165/plunderer.jpg",
      "id": "plunderer-sub-espanol",
      "nEpisode": "16"
    },
      // ...
   ],
   "success": true
```
>Method: **GET** \
> Route: **/search/:input**

```js
// return animes wich name match with input search
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
>Method: **GET** \
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
   ]
  "success": true
```

#
>Method: **GET** \
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
>Method: **GET** \
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
         }
       ],
      "img": "https://monoschinos.com/assets/img/serie/imagen/toradora.jpg",
      "episodes": [
         {
            "episode": 25,
            "id": "toradora-episodio-25"
         },
         // ...
      ]
   },
   "success": true
```
#
>Method: **GET** \
> Route: **/episode/:id**

```json
>> return a single episode video information
   "title": "Plunderer 16 Sub Español",
   "animeId": "plunderer-sub-espanol",
   "epNumber": 16,
   "videos": [
       "https://www.fembed.com/v/7rpprtg56klwn-p",
       "https://clipwatching.com/embed-xvy59wjfi0v3.html",
       "https://uqload.com/embed-ibodkth3sexy.html",
       "https://videobin.co/embed-jmcngaf8t2fn.html",
       "https://www.mp4upload.com/embed-7ntp2j1t8llp.html",
       "https://ok.ru/videoembed/1893744839217"
   ],
   "downloads": [
      "https://mega.nz/#!znAD1IpI!pxBJLi43AEWLYAHv2R-pD1XDvjOMocaf4vBXkBi0Ndc",
      "https://bayfiles.com/LcXfAaL6nc",
      "https://www.solidfiles.com/v/R4BeDDRZLnAYk",
      "https://1fichier.com/?2e568pwg3w6vn10n2xk3"
   ],
   "success": true
```
#
>Method: **GET** \
> Route: **/gender/:id?page=pageNumber**

```js
// return animes wich name contains the input gender and within the pageNumber query, default pageNumber is 1
   "animes": [
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
>Method: **GET** \
> Route: **/letter/:letter?page=pageNumber**

```js
// return animes wich name contains the input letter and within the pageNumber query, default pageNumber is 1
   "animes": [
      {
         "id": "tv-yarou-nanaana-kaibutsu-kraken-wo-oe-sub-espanol",
         "img": "https://monoschinos.com/image/imagen/160/224/tv-yarou-nanaana-kaibutsu-kraken-wo-oe.jpg",
         "title": "TV Yarou Nanaana: Kaibutsu Kraken wo Oe!"
      },
      // ...
   ],
   "pages": 7,
   "success": true
```


#
>Method: **GET** \
> Route: **/ovas/:pageNumber**

```js
// return ovas by page and total count of pages, because in site can't search ovas by input
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
