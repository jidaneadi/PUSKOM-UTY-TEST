require('dotenv').config();
const {DB_HOST, DB_USERNAME, DB_PASS, DB_DEVELOPMENT}=process.env;
module.exports={
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASS,
    "database": DB_DEVELOPMENT,
    "host": DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASS,
    "database": "database_test",
    "host":DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASS,
    "database": "database_production",
    "host":DB_HOST,
    "dialect": "mysql"
  }
}
