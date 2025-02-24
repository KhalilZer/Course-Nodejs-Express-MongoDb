Node.js Express & MongoDB - Guide d'utilisation

Introduction

Ce projet est un guide pratique pour apprendre à utiliser Node.js et Express avec une connexion à une base de données MongoDB. Il inclut des fonctionnalités essentielles comme la gestion des routes, les requêtes HTTP, et l'interaction avec MongoDB.

Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

Node.js (version recommandée : 16+)

MongoDB (ou un compte sur MongoDB Atlas)

Postman (optionnel pour tester les API)

Installation

Cloner le référentiel

git clone https://github.com/KhalilZer/Course-Nodejs-Express-MongoDb.git
cd Course-Nodejs-Express-MongoDb

Installer les dépendances

npm install

Configuration de la base de données

Démarrer MongoDB en local (si vous utilisez MongoDB localement) :

mongod

Configurer l'URL de connexion :

Créez un fichier .env

Ajoutez l'URL de connexion MongoDB (exemple) :

MONGO_URI=mongodb://127.0.0.1:27017/monApp
PORT=5000

Démarrage du serveur

Lancez le serveur avec la commande :

npm start

Ou en mode développement avec Nodemon (si installé) :

npm run dev

Routes API

1. Obtenir tous les restaurants

GET /restaurants

2. Obtenir un restaurant par ID

GET /restaurants/:id

3. Ajouter un nouveau restaurant

POST /restaurants

Body JSON exemple :

{
  "name": "Le Gourmet",
  "location": "Paris",
  "cuisine": "Francaise"
}

4. Mettre à jour le titre d'un restaurant

PUT /restaurants/:id

Body JSON exemple :

{
  "name": "Le Gourmet 2.0"
}

5. Supprimer un restaurant

DELETE /restaurants/:id

Technologies utilisées

Node.js - Environnement d'exécution JavaScript

Express.js - Framework web pour Node.js

MongoDB - Base de données NoSQL

Mongoose - ODM pour interagir avec MongoDB

Dotenv - Gestion des variables d'environnement

Auteurs

[Ton Nom] - Développeur Full Stack
