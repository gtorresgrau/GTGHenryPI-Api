const { Country, Activity } = require ('../db.js');
const { Op } = require ('sequelize');


const getCountriesByActivity = async (req, res) => {
    let { filter } = req.params;
    console.log('Params get: ', filter)
    try{
        const filterByActivities = await Country.findAll({
            include: { 
                model: Activity 
            },
            where: {
                Activities: {[Op.iLike]: `%${filter}%` }
            }
        })
        console.log(filterByActivities)
        !filterByActivities.length
            ? res.status(404).send(`No existen actividades que incluya la palabra: ${filter}`)
            : res.status(200).send(filterByActivities);
    }
    catch(e){
        res.status(404).send(`Error al recibir la actividad:  ${filter}`)
    }
}
export default{ getCountriesByActivity };