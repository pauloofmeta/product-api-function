import dotenv from 'dotenv';
import api from './functions/api';

dotenv.config({ path: `${__dirname}/environments/local.env`});

api.listen(4001, () => {
  console.log('Server is running on port 4001');
});