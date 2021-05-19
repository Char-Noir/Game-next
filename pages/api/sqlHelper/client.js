const { Pool, Client } = require('pg')
 export const client = new Client({
  user: 'adxpwcnalqdosr',
  host: 'ec2-54-228-99-58.eu-west-1.compute.amazonaws.com',
  database: 'd4kimfb423lrmo',
  password: '2ba2e457da87f1aabcada20f4294d49d4bae0323f955f12bf2cbd01299965a36',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});
