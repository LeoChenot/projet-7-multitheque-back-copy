const { Pool } = require("pg");

const client = new Pool({
  connectionString: 'postgres://sxggdxovbkysii:1cab0cf86eca7a50279fe528ab142acd5ad82e388042518edc69a22eec2bf895@ec2-63-35-156-160.eu-west-1.compute.amazonaws.com:5432/dc1s0lt4eh44p5',
  ssl:{
    rejectUnauthorized:false
  }
});

client.connect();

module.exports = client;