import express from "express";
import cors from "cors";
import { executeQuary } from "../config/database.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Rotas
app.get("/produtos", function(req, res){

    let filtro = [];
    let ssql = "SELECT * FROM TAB_PRODUTO WHERE ID_PRODUTO > 0 ";

    if (req.query.descricao){
        ssql += "AND descricao LIKE ?";
        filtro.push("%" + req.query.descricao + "%");
    }


    executeQuary(ssql, filtro, function(err, result){
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
        }
    });

});

app.post("/produtos", function(req, res){

    let ssql = "INSERT INTO TAB_PRODUTO(DESCRICAO, VALOR) VALUES(?, ?) RETURNING ID_PRODUTO";

    executeQuary(ssql, [req.body.descricao, req.body.valor], function(err, result){
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json({id_produto: result.ID_PRODUTO});
        }
    });
});

app.listen(3000, function () {
    console.log("Servidor no ar");
});