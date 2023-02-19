const { Pool } = require("pg");

const client = new Pool({
  connectionString: 'postgres://collectio:OpV0dLz9RuBt@ep-lingering-forest-229253.eu-central-1.aws.neon.tech/collectio',
  ssl:{
    rejectUnauthorized:false
  }
});

client.connect();

module.exports = client;