const { Pool } = require("pg");

const client = new Pool({
  connectionString: 'postgres://hbjxklcdgtyfom:39a01cfee918fa7729f83dc6155c4dcb6cd6bb304f57fa405cdaaec69d4c986e@ec2-176-34-215-248.eu-west-1.compute.amazonaws.com:5432/d2s4rd97gne0v9',
  ssl:{
    rejectUnauthorized:false
  }
});

client.connect();

module.exports = client;