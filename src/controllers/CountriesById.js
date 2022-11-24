import { Country, Activity } from '../db.js';
import { Op } from 'sequelize';

const getById = async (req,res) => {
    let {id} = req.params;
    console.log('Params ID: ', id);
    try{
        const filterById = await Country.findOne({
            include: { 
                model: Activity 
            },
            where: {
              id: { [Op.iLike]: `%${id}%` }
            }
            
        });

        !filterById
            ? res.status(404).send(`No se encontro el pais con el ID: ${id} `)
            : res.status(200).send(filterById);
    }
    catch(e){
        res.status(404).send(`Error al recibir el ID: ${id}`)
    }
};

export default{
    getById
};