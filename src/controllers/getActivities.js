const { Activity } = require ('../db.js');


const getActivities = async (req,res) => {
    const {name} = req.query;
    try{
        const filterByActivities = await Activity.findAll();
      
        !filterByActivities.length
            ? res.status(404).send(`No existen actividades que incluya la palabra: ${name}`)
            : res.status(200).send(filterByActivities);
    }
    catch(e){
        
        res.status(404).send(`Error al recibir La Actividad:  ${name}`)
    }
};

module.exports = {getActivities}