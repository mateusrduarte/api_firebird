import express from "express";
import cors from "cors";
import { dbOptions } from "../config/database.js";
import Firebird from "node-firebird";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Rotas
app.get("/produtos", function(req, res){

    Firebird.attach(dbOptions, function(err, db) {

        if (err){
            return res.status(500).json(err);
        }
    
        // db = DATABASE
        db.query('SELECT * FROM TAB_PRODUTO', function(err, result) {
            // IMPORTANT: close the connection
            db.detach();

            if (err){
                return res.status(500).json(err);
            } else {
                return res.status(200).json(result);
            }
        });
    
    });
});

app.listen(3000, function () {
    console.log("Servidor no ar");
});