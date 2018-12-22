const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    connectionString: process.env.PG_URI
  });

  pool.on('connect', () => {
    console.log('connected to the db');
  });

  const createTables = () => {
    const queryText =
      `CREATE TABLE IF NOT EXISTS
        Sulyp_Members(
          id UUID PRIMARY KEY,
          first_name character(255),
          last_name character(255),
          street_address character varying(100),
          apt_num character varying(20),
          state character varying(25),
          zip_code character varying(10),
          email text NOT NULL,
          DOB date,
          employer text,
          position_title text, 
          date_created TIMESTAMP,
          date_modified TIMESTAMP
        )`;
  
    pool.query(queryText)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  }