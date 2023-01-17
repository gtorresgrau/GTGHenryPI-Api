const { Router } = require('express');
const router = Router();
const {countries} = require( '../controllers/Countries.js');
const {getContinents} = require( '../controllers/Continents.js');
const {getById} = require( '../controllers/CountriesById.js');
const {postActivity} = require( '../controllers/Activities.js');
const {getActivities} = require ('../controllers/getActivities.js');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries', countries);

router.get(`/countries/continent/:continent`, getContinents);

router.post('/activities', postActivity);

router.get('/activities', getActivities);

router.get(`/countries/:id`, getById);


module.exports = router;
