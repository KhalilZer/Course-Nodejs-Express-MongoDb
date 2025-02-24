# Node.js Express & MongoDB - Guide d'utilisation

Ce projet est un guide pratique pour apprendre à utiliser **Node.js** et **Express** avec une connexion à une base de données **MongoDB**. Il inclut la gestion des routes, les requêtes HTTP et l'interaction avec MongoDB.  

### 🚀 Installation  
1. **Cloner le projet** :  
   ```sh
   git clone https://github.com/KhalilZer/Course-Nodejs-Express-MongoDb.git
   cd Course-Nodejs-Express-MongoDb
   npm install
Configurer MongoDB :
Créez un fichier .env et ajoutez :
env
Copy
Edit
MONGO_URI=mongodb://127.0.0.1:27017/monApp
PORT=5000
Démarrer le serveur :
sh
Copy
Edit
npm start  # Ou en mode dev : npm run dev
📌 Routes API
Obtenir tous les restaurants : GET /restaurants
Obtenir un restaurant par ID : GET /restaurants/:id
Ajouter un restaurant : POST /restaurants (JSON body : {"name": "Le Gourmet", "location": "Paris", "cuisine": "Francaise"})
Mettre à jour un restaurant : PUT /restaurants/:id (JSON body : {"name": "Le Gourmet 2.0"})
Supprimer un restaurant : DELETE /restaurants/:id
🛠 Technologies utilisées
Node.js, Express.js, MongoDB, Mongoose, Dotenv

👨‍💻 Auteur : [Ton Nom]
📜 Licence : MIT
