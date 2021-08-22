import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import Database from "./db/connection";
import recadoRoutes from "./routes/recadoRoute";
var cors = require("cors");

const app = express();
dotenv.config();

//connectDB
const db = new Database().openConnection();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", recadoRoutes);
app.get("/", (req: Request, res: Response) => {
    res.send("API online!");
});

app.listen(process.env.PORT, () => {
    return console.log(
        `server is listening in ${process.env.NODE_ENV} mode on port ${process.env.PORT},`
    );
});

/*function go() {
    //createConnection()
        //.then(async (connection) => {
            console.log("Inserting a new user into the database...");
            const rec = new Recado("kek", "wow");

            await connection.manager.save(rec);
            console.log("Saved a new user with id: " + rec.uid);

            console.log("Loading users from the database...");
            const recs = await connection.manager.find(Recado);
            console.log("Loaded users: ", recs);

            console.log(
                "Here you can setup and run express/koa/any other framework."
            );
        })
        .catch((error) => console.log(error));
}*/
