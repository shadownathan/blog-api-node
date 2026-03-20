# API de Gestion d'Articles (Node.js & MongoDB)

Une API REST simple construite avec **Express** et **Mongoose** pour gérer une collection d'articles technologiques.

## FONTIONALITE

* **Connexion sécurisée** à MongoDB Atlas via variables d'environnement.
* **Seeding automatique** : Insertion de données de test au premier démarrage.
* **CRUD Complet** :
    * `GET /api/articles` : Récupérer tous les articles.
    * `POST /api/articles` : Ajouter un nouvel article (protection contre les doublons incluse).
    * `PUT /api/articles/:id` : Modifier un article existant.
    * `DELETE /api/articles/:id` : Supprimer un article.

## Installation et Lancement

1.  **Cloner le dépôt** :
    ```bash
    git clone <mon lien github>
    cd projetapi
    ```

2.  **Installer les dépendances** :
    ```baah
    npm install
    ```

3.  **Configurer les variables d'environnement** :
    Créez un fichier `.env` à la racine et ajoutez votre URI MongoDB :
    ```text
    MONGO_URI=votre_lien_mongodb
    PORT=3000
    ```

4.  **Démarrer le serveur** :
    
    nodemon server.js
    ```

## Technologies utilisées
* **Node.js** & **Express**
* **MongoDB Atlas** & **Mongoose**
* **Dotenv** (Gestion des secrets)
* **Body-parser**