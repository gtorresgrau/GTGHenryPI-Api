const { Country, Activity } = require ('../db.js');
const { Op } = require ( 'sequelize');

const getContinents = async (req, res) => {
    const { continent } = req.params;
    console.log('Params: ', continent)
    try{
        const filterByContinent = await Country.findAll({
            include: { 
                model: Activity 
            },
            where: {
                continents: { [Op.iLike]: `%${continent}%` }
            }
        })
      
        !filterByContinent.length
            ? res.status(404).send(`No existen continentes que incluya la palabra: ${continent}`)
            : res.status(200).send(filterByContinent);
    }
    catch(e){
        res.status(404).send(`Error al recibir el Continente:  ${continent}`)
    }
}
  
module.exports={ getContinents};