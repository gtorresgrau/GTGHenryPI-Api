const {Router}  = requier( 'express');
const {countries} = requier( '../controllers/Countries.js');
const {getContinents} = requier( '../controllers/Continents.js');
const {getById} = requier( '../controllers/CountriesById.js');
const {postActivity} = requier( '../controllers/Activities.js');
const {getActivities} = requier( '../controllers/GetActivities.js');


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
