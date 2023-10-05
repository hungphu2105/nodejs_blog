//import express from 'express';
//import { engine } from 'express-handlebars';
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.static(path.join(__dirname,'public')))

app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/', (req, res) => {
    res.render('new');
});

app.listen(3000);