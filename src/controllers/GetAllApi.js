const { get } = require ( 'axios');
import { Country, Activity } from '../db.js';


const getAllApi = async () => {
    try{            
        const all = await get('https://restcountries.com/v3/all');
        const countries = await all.data.map(el => {
            return{
                id: el.cca3,
                name: el.name.common,
                flags: el.flags? el.flags[0] : el.flags === "Bandera no encontrada",
                continents: el.continents[0],
                capital: el.capital? el.capital[0]: "Sin capital",
                subregion: el.subregion? el.subregion : "No subregion",
                area: el.area,
                population: el.population,
            }
        });
       //console.log('getallApi :', countries);
        let countriesDb = await Country.findAll({
            include: { model: Activity }
        });
        
        if (!countriesDb.length) await Country.bulkCreate(countries);
        return console.log('La db se cargo sataisfactoriamente');
    }
    catch(e) {
        console.log(e)
        res.status(404).send("Error al Recibir datos de la API")
    }
};

module.exports={ getAllApi };