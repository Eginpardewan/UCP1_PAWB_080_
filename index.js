import express from "express";
import bodyParser from "body-parser";
import bibitRoute from "./routes/bibit-tanaman.js";
import pupukRoute from "./routes/pupuk.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());


app.use("/Bibit", bibitRoute);
app.use("/Pupuk", pupukRoute);
app.get("/", (req, res) =>{
    console.log(['GET ROUTE']);
    res.send("Selamat Datang Di Website Petani Serderhana");
});

app.use(bodyParser.json());
app.listen(PORT, () => console.log(`server berjalan di port : http://localhost:${PORT}`));