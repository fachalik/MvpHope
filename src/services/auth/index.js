import axios from 'react-native-axios';
import config from '../../../config';
//GET METHODE

//POST METHODE
const postLogin = async body => {
  const {data} = await axios.post(`${config.API_URL}/auth/login`, body);

  return data;
};

const postRegister = async body => {
  const {data} = await axios.post(`${config.API_URL}/auth/register`, body);

  return data;
};

const postRefreshToken = async refreshToken => {
  const {data} = await axios.post(
    `${config.API_URL}/auth/login/refresh`,
    refreshToken,
  );

  return data;
};

//PUT METHODE

//DELETE METHODE

export {postLogin, postRegister, postRefreshToken};
