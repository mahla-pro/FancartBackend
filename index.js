import express from "express";
import mssql from "mssql";

const app = express();

// const msa = require("mssql");
// var config = {
//     user:"sa",
//         password:"12345678",
//       server:"localhost:",
//         database: "CrudDB"
// }
// msa.connect(config);

app.get("/" , (req,res) => {
    res.json("hi ")
})

app.listen(8000, () =>{
    console.log("connect ro backend")
})