// const express = require('express');
import express from "express";
// const path = require('path');

const app = express();

import { add_data, get_data } from "./config/database.js";

//Setting up parsers
app.use(express.json());
app.use(express.urlencoded({ exntended: true }));
app.set("view engine", "ejs");


app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get("/show_data", async (req, res) => {
    const rows = await get_data();
    res.render("show_data.ejs", { rows });
})


app.post('/create', function (req,res) {
    const title = req.body.title;
    const desc = req.body.text;
    add_data(title, desc);
    res.redirect("/show_data");
})

app.listen(3000, function () {
    console.log("It is working");
})