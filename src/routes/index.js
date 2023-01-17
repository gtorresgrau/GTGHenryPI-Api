const {Router}  = require( 'express');
const {countries} = require( '../controllers/Countries.js');
const {getContinents} = require( '../controllers/Continents.js');
const {getById} = require( '../controllers/CountriesById.js');
const {postActivity} = require( '../controllers/Activities.js');
const {getActivities} = require( '../controllers/GetActivities.js');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const PATH = '/countries';


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get(PATH, countries);

router.get(`${PATH}/continent/:continent`, getContinents);

router.post('/activities', postActivity);

router.get('/activities', getActivities);

router.get(`${PATH}/:id`, getById);


module.exports = router;
