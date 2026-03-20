const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const express=require('express');
const dontenv=require('dotenv').config();



const port=process.env.PORT || 3000;
const app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

async function connectDB() {

    try{


        await mongoose.connect(process.env.MONGO_URI);
        console.log("la base de donnee est bien connectes");
        

    }catch(err){

     console.error(err);
        console.log("la base de donnee n'est pas connectes");
    }

    
}

connectDB();


const Api=require("./module/api");



async function createArticle(){

    try{



const articles=[
    {
        id:1,
        titre:"intoduction au web",
        auteur:"charle",
        date:"2026-06-01",
        categorie:"technologie"



   },

   {
    id:2,
    titre:"apprendre nodejs",
    auteur:"alice",
    date:"2026-04-17",
    categorie:"developpement"

   }


];


   const count= await Api.countDocuments();

   if(count>0){

    console.log("les articles existent deja dans la base de donnee");
    return;
   }

    await Api.create(articles);
    console.log("les articles ont bien ete crees");



    }catch(err){

        console.error(err);
    }

}

createArticle();


app.post("/api/articles",async function(req,res){

    try{

        const info=({
            id:req.body.id,
            titre:req.body.titre,
            auteur:req.body.auteur,
            date:req.body.date,
            categorie:req.body.categorie


        });

       const article = await Api.create(info);
        res.status(201).json({message:"article cree avec succes",article:article});



    }catch(err){

        console.error(err);
        res.status(500).json({message:"une erreur  du serveur "});
    }


});







app.get("/api/articles",async function(req,res){

    try{

        const articles=await Api.find();
        res.status(200).json(articles);

    }catch(err){

        console.error(err);
        res.status(500).json({message:"une erreur du serveur"});
    }






});


    app.put("/api/articles/:id", async function(req, res) {
    try {
        
        const articleModifie = await Api.findOneAndUpdate(
            { id: req.params.id }, 
            { $set: req.body },    
            { new: true }          
        );

        if (!articleModifie) {
            return res.status(404).json({ message: "Article non trouvé" });
        }

        res.status(200).json({
            message: "Article mis à jour avec succès",
            article: articleModifie
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur du serveur" });
    }
});


  app.delete("/api/articles/:id", async function(req, res) {
    try {
        
        const articleSupprime = await Api.findOneAndDelete({ id: req.params.id });

        if (!articleSupprime) {
            return res.status(404).json({ message: "Article non trouvé" });
        }

        res.status(200).json({ message: "Article supprimé avec succès" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur du serveur" });
    }
});



app.listen(port,()=>{

    console.log(`le serveur est demarre sur le port ${port}`);
});