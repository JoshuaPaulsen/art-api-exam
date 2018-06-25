# art-api-exam

Here is sample documentation for the art-api-exam.

## Getting Started

Enter the following commands to clone the repo and install dependencies.

```
$ git clone 
```


## Clone your repo (1)
```
Clone the repo by copying the link and typing , git clone <url> into your command line.
```
## Install dependencies (2)
```
The art-api relys on a ton of dependencies to run. You can get them all installed by typing npm install into your command line.
```
## Establish environment variables (3)
```
After completing steps 1-3 next you need to setup your environment variables. These are stored in a .env file. To create a .env file , in your command line inside of your clone directory you can type "touch .env" there you need to declare the following environment variables.

- PORT = 5000
- COUCH_HOSTNAME = <url template> http://"username":"password"@example.jrscode.cloud/
- COUCH_DBNAME = "desired DBname"
```
## Load data (4)

Using the file named load-data.js, create a program that adds the following paintings into a CouchDB database named {your first name}Art. Ex: jpart:

```
[
  {
    "_id": "painting_starry_night",
    "name": "The Starry Night",
    "type": "painting",
    "movement": "post-impressionism",
    "artist": "Vincent van Gogh",
    "yearCreated": 1889,
    "museum": {name: "Museum of Modern Art", location: "New York"}
  },
  {
    "_id": "painting_water_lilies_nympheas",
    "name": "Water Lilies Nympheas",
    "type": "painting",
    "movement": "impressionism",
    "artist": "Claude Monet",
    "yearCreated": 1907,
    "museum": {"name": "Art Gallery of Ontario", "location": "Toronto"}
  },
  {
    "_id": "painting_last_supper",
    "name": "The Last Supper",
    "type": "painting",
    "movement": "Renaissance",
    "artist": "Leonardo da Vinci",
    "yearCreated": 1495,
    "museum": {"name": "Santa Maria delle Grazie", "location": "Milan"}
  },
  {
    "_id": "painting_sunday_afternoon_on_the_island_of_la_grande_jatte",
    "name": "A Sunday Afternoon on the Island of La Grande Jatte",
    "type": "painting",
    "movement": "impressionism",
    "artist": "Georges Seurat",
    "yearCreated": 1884,
    "museum": {"name": "Art Institute of Chicago", "location": "Chicago"}
  },
  {
    "_id": "painting_guernica",
    "name": "Guernica",
    "type": "painting",
    "movement": "surrealism",
    "artist": "Pablo Picasso",
    "yearCreated": 1937,
    "museum": {"name": "Museo Nacional Centro de Arte Reina Sofía", "location": "Madrid"}
  },
  {
    "_id": "painting_bal_du_moulin_de_la_galette",
    "name": "Bal du moulin de la Galette",
    "type": "painting",
    "movement": "impressionism",
    "artist": "Pierre-Auguste Renoires",
    "yearCreated": 1876,
    "museum": {"name": "Musée d’Orsay", "location": "Paris"}
  }
]
```
Within your package.json, create a load script that runs your load-data.js program.

## Start the API (5)
```
After completing all the steps listed, run npm start in your command line to get the art-api up and running.
```
