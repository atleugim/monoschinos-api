# Monoschinos-API (v1.0.1)
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
```
$ git clone https://github.com/atleugim/monoschinos-api.git
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

```json
>> return lastest episodes added to the site
   "animes": [
      {
         "title": "Black Clover",
         "img": "https://monoschinos.com/image/episode/290/165/black-clover-132.jpg",
         "id": "black-clover",
         "nEpisode": "132"
      }
   ],
   "success": true
```
>Method: **GET** \
> Route: **/search/:input**

```json
>> return animes wich name match with input search
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
       }
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
      "genres": [
         "Comedia",
         "Escolares"
      ],
      "img": "https://monoschinos.com/assets/img/serie/imagen/toradora.jpg",
      "episodes": [
         {
            "episode": 25,
            "id": "toradora-episodio-25"
         },
      ]
   },
   "success": true
```
#
>Method: **GET** \
> Route: **/episode/:id**

```json
>> return a single episode video information
   "video": "https://monoschinos.com/reproductor?url=https%3A%2F%2Freproductor.monoschinos.com%2Faqua%2Fcl%3Furl%3DTORA%21+-+01.mp4&id=5991",
   "download": "https://mega.nz/#!f6JzRASL!8SRmVCgGWpB1Ap_VtTqrh8NQw8cB_h5BaK7SvpkTWpU",
   "success": true
```
#
>Method: **GET** \
> Route: **/gender/:genderId**

```js
// return animes that match with the input gender id
   "animes": [
      {
         "id": "yesterday-wo-utatte-extra-sub-espanol",
         "img": "https://monoschinos.com/image/imagen/160/224/yesterday-wo-utatte-extra.png",
         "title": "Yesterday wo Utatte Extra\t"
      },
      // ...
   ],
   "success": true
```
#
>Method: **GET** \
> Route: **/letter/:letter**

```js
// return animes wich name contains the input letter
   "animes": [
      {
         "id": "tv-yarou-nanaana-kaibutsu-kraken-wo-oe-sub-espanol",
         "img": "https://monoschinos.com/image/imagen/160/224/tv-yarou-nanaana-kaibutsu-kraken-wo-oe.jpg",
         "title": "TV Yarou Nanaana: Kaibutsu Kraken wo Oe!"
      },
      // ...
   ],
   "success": true
```


#
>Method: **GET** \
> Route: **/ovas/:pageNumber**

```js
// return ovas by page, because in site can't search ovas by input
   "ovas": [
      {
         "id": "strike-the-blood-iv-sub-espanol",
         "img": "https://monoschinos.com/image/imagen/160/224/strike-the-blood-iv.jpg",
         "title": "Strike the Blood IV"
      },
      // ...
   ]
   "success": true
```

## **Author**
> Miguel Vega
