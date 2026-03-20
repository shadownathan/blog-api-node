# API de Gestion d'Articles (Node.js & MongoDB)

Une API REST robuste construite avec **Node.js**, **Express** et **Mongoose** pour gérer une collection d'articles technologiques. Ce projet inclut une protection des données via variables d'environnement et une gestion complète du CRUD.

---

##  Technologies Utilisées

* **Backend** : Node.js & Express
* **Base de données** : MongoDB Atlas (via Mongoose)
* **Sécurité** : Dotenv (Protection des identifiants)
* **Outils** : Body-parser, Nodemon

---

##  Fonctionnalités

* **Gestion complète (CRUD)** :
    * `GET` : Récupération de tous les articles.
    * `POST` : Création d'articles avec détection des doublons.
    * `PUT` : Modification partielle via l'opérateur `$set`.
    * `DELETE` : Suppression sécurisée par ID.
* **Sécurité** : Les accès à la base de données sont masqués grâce au fichier `.env`.
* **Validation** : Schémas Mongoose structurés pour garantir l'intégrité des données.

---

##  Installation et Lancement

### 1. Cloner le projet
```bash
git clone (https://github.com/shadownathan/blog-api-node.git)
cd projetapi