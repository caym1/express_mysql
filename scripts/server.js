import express from "express";
import bodyParser from "body-parser";
import db from "../models";
import apiPost from "../app/api/post";
import apiAuthor from "../app/api/author";

const app = express();
app.use(bodyParser.json());

apiPost(app, db);
apiAuthor(app, db);

app.listen(8080, () => console.log("App listening on port 8080!"));
