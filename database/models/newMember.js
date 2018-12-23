
const bodyParser = require('body-parser');
const { Pool, Client } = require('pg');
const pool = new Pool({
    connectionString: process.env.PG_URI,
})

require('dotenv').config();


const addMember = (req,res)=>{
    const{first_name,
        last_name,
        street_address,
        apartment_num,
        state,
        zip_code,
        email,
        DOB,
        employer,
        position_title,city
    }= req.body

    pool.query('INSERT INTO sulyp_membership (first_name, last_name,street_address,apartment_num,city,state,zip_code,email,DOB,employer,position_title)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',[first_name, last_name,street_address,apartment_num,city,state,zip_code,email,DOB,employer,position_title], (err,results) =>{
        if(err){
            throw err
        }
        console.log("data submitted")
        res.redirect('/')   
    })    
}

module.exports = {
    addMember
}


