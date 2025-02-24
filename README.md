# Node.js Express & MongoDB - Guide d'utilisation  
Ce projet est un guide pratique pour apprendre à utiliser **Node.js** et **Express** avec une connexion à une base de données **MongoDB**. Il inclut la gestion des routes, les requêtes HTTP et l'interaction avec MongoDB.  

## Installation  
### 1️⃣ Prérequis  
Avant de commencer, assurez-vous d'avoir installé :  
- [Node.js](https://nodejs.org/) (version recommandée : 16+)  
- [MongoDB](https://www.mongodb.com/try/download/community) (ou un compte sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))  
- [Postman](https://www.postman.com/) (optionnel pour tester les API)  

### 2️⃣ Cloner le projet  
```sh
git clone https://github.com/KhalilZer/Course-Nodejs-Express-MongoDb.git
cd Course-Nodejs-Express-MongoDb
```

### 3️⃣ Installer les dépendances  
Exécutez la commande suivante pour installer toutes les dépendances nécessaires :  
```sh
npm install
```
### 4️⃣ Configurer MongoDB  

Créez un fichier `.env` à la racine du projet et ajoutez les informations de connexion :  

```env
MONGO_URI=mongodb://127.0.0.1:27017/monApp  
PORT=5000
```
### 5️⃣ Démarrer le serveur  

Assurez-vous que toutes les dépendances sont bien installées, puis démarrez le serveur avec :  

```sh
npm install  # Vérification des dépendances  
npm start    # Lancer le serveur en mode production  

# Ou pour un démarrage en mode développement avec nodemon  
npm run dev  


