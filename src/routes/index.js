import Router  from 'express';
import countries from '../controllers/Countries.js';
import getContinents from '../controllers/Continents.js';
import getById from '../controllers/CountriesById.js';
import postActivity from '../controllers/Activities.js';
import getActivities from '../controllers/GetActivities.js';


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
