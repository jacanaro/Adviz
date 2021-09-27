const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const contactsRouter = require('./routes/contacts');
const advizRouter = require('./routes/adviz');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/adviz', advizRouter);
app.use('/adviz/contacts', contactsRouter);

module.exports = app;





/*BACKUPS!!*/
//DATABASE für BACKUP
/*
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/adviz", {useNewUrlParser: true });
const contactSchema = new mongoose.Schema ({
    Titel: String,
    m_w_d: String,
    Vorname: String,
    Name: String,
    StrHsnr: String,
    PLZ: Number,
    Stadt: String,
    Land: String,
    Email: String,
    Sonstiges: String,
    isPrivate: Boolean,
    lat: Number,
    lng: Number,
    ownerID: String
});
const Contact = mongoose.model("Contact", contactSchema);
const userSchema = new mongoose.Schema ({
    userID: String,
    password: String,
    firstname: String,
    lastname: String,
    isAdminUser: Boolean
});
const User = mongoose.model("User", userSchema);
 */

/*hier werden die BACKUP-Kontakte erstellt, falls was mies läuft
(werden noch nicht in DB eingefügt)*/

/*
const caro = new Contact({
    Titel: "Frau",
    m_w_d: "weiblich",
    Vorname: "Caro",
    Name: "A.",
    StrHsnr: "Firlstraße 2",
    PLZ: 12459,
    Stadt: "Berlin",
    Land: "Deutschland",
    Email: "mail@mail.de",
    Sonstiges: "probiert was mit DB",
    isPrivate: true,
    lat: 52.462600,
    lng: 13.523220,
    ownerID:"admina"
});
const schmaron = new Contact({
    Titel: "Herr",
    m_w_d: "männlich",
    Vorname: "Aaron",
    Name: "B.",
    StrHsnr: "Seelenbinderstraße 32",
    PLZ: 12555,
    Stadt: "Berlin",
    Land: "Deutschland",
    Email: "andereMail@mail.de",
    isPrivate: false,
    lat: 52.455430,
    lng: 13.586020,
    ownerID:"admina"
});
const muster = new Contact({
    Titel:"",
    m_w_d: "divers",
    Vorname: "Muster",
    Name: "Mustermensch",
    StrHsnr: "Wilhelminenhofstraße 50",
    PLZ: 12459,
    Stadt: "Berlin",
    Land: "Deutschland",
    Email: "keine@mail.de",
    Sonstiges: "schaut nur",
    isPrivate: true,
    lat: 52.539430,
    lng: 13.388550,
    ownerID:"normalo"
});
const musterino = new Contact({
    Titel:"",
    m_w_d: "divers",
    Vorname: "Musterino",
    Name: "Jackson",
    StrHsnr: "Großstraße 22",
    PLZ: 12459,
    Stadt: "Berlin",
    Land: "Deutschland",
    Email: "eine@mail.de",
    Sonstiges: "schaut weg",
    isPrivate: false,
    lat: 52.462230,
    lng: 13.521870,
    ownerID:"normalo"
});
const admina = new User({
    userID: "admina",
    password: "admina",
    firstname: "admina",
    lastname: "admina",
    isAdminUser: true
});
const normalo = new User({
    "userID": "normalo",
    "password": "normalo",
    "firstname": "normalo",
    "lastname": "normalo",
    "isAdminUser": false
});
*/

/*--------HIER WIRD EINGEFÜGT---------*/
/*NACH EINMALIGEM NUTZEN AUSKOMMENTIEREN!!!!!,
SONST WIRD ES BEI JEDEM START NEU UND DOPPELT UND DREIFACH HINZUGEFÜGT*/
/*
Contact.insertMany([schmaron, caro, muster, musterino], function (err){
    if (err){
        console.log(err);
    } else {
        console.log("Erfolgreich die drei neuen dazu gemacht super");
    }
});
User.insertMany([admina, normalo], function (err){
    if (err){
        console.log(err);
    } else {
        console.log("Erfolgreich die beiden User dazu gemacht");
    }
});
*/
/*------------------END OF AUSKOMMENTIEREN------------------*/