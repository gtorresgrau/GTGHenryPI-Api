const {Country, Activity} = require("../db.js");


const postActivity = async (req, res) => {
    let {name, difficulty, duration, season, countriesId} = req.body;
    console.log(req.body);
    if(!name || !difficulty || !duration || !season || !countriesId) return res.status(400).send('Debe completar todos los datos');
    try{
        const newActivity = await Activity.create({
            name, 
            difficulty, 
            duration, 
            season  
        }); 
 
        //console.log(newActivity);

        const countriesdb = await Country.findAll({
            where: { id: countriesId}
        });

        if(countriesdb){
            await newActivity.addCountry(countriesdb)
            res.status(201).send('Actividad creada con exito')
        }
        else{
            console.log('No se pudo crear la nueva Actividad');
        }
    }
    catch (e){
        console.log(e)
        res.status(404).send("Error to post an Activity", e)
    }
};

module.exports ={
    postActivity
};