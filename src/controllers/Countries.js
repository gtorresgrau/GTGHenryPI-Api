const { Country, Activity } = require( '../db.js');
const { Op } = require( 'sequelize');

const countries = async(req, res)=>{
    let {name} = req.query;
    name?console.log('Query:' , name):console.log('Sin Query');
    try{
        const countries = await Country.findAll({
            include: { model: Activity }
        });       

        if(!name) return res.status(200).send(countries);
        
        const filterByName = await Country.findAll({
            where: {
              name: { [Op.iLike]: `%${name}%` }
            },
            include: { model: Activity }
        })
        !name || !filterByName.length
            ?res.status(404).send(`No se encontro el o los paises buscados con el criterio: ${name}`)
            :res.status(200).send(filterByName);
    }
    catch(e){
        console.log(e)
        res.status(404).send("Error al buscar los paises desde Database")
    }

};

module.exports={ countries};
