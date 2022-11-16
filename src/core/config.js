process.env.NODE_ENV = (process.env.NODE_ENV || 'development').toLowerCase();
const dotenv = require('dotenv');
const envFound = dotenv.config({ path: './.env' });
if (envFound.error) {
  throw new Error('File .env not found');
}

module.exports = {
  jwtSecretKey: process.env.JWT_SECRET_KEY || '',
};