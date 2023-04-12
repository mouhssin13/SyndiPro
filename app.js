const express = require('express');
const bodyParser = require('body-parser');

const annonceRoute = require('./routes/annonce');
const userRoute = require('./routes/user');
const immeubleRoute = require('./routes/immeuble');
const appRoute = require('./routes/appartement');
const PMRoute = require('./routes/paimentMensuel');
const imageRoute = require('./routes/images');
const reclamationRoute = require('./routes/reclamation');
const depenseRoute = require('./routes/depense');
const cotisationRoute = require('./routes/cotisation');


const app = express();
app.use(bodyParser.json());
app.use('/uploads',express.static('uploads'));



app.use("/api/annonce",annonceRoute);
app.use("/api/user",userRoute);
app.use("/api/immeuble",immeubleRoute);
app.use("/api/app",appRoute);
app.use('/api/PM',PMRoute);
app.use('/api/image',imageRoute)
app.use('/api/reclamation',reclamationRoute);
app.use('/api/depense',depenseRoute);
app.use('/api/cotisation',cotisationRoute);


module.exports = app;