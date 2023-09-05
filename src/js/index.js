import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Rotas
app.get("/produtos", function(req, res){
    res.status(200).send("Listando os produtos!");
});

app.listen(3000, function () {
    console.log("Servidor no ar");
});