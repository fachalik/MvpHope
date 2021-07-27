import axios from 'react-native-axios';
import config from '../../../config';

//GET METHODE
const getUserMe = async Token => {
  const {data} = await axios.get(`${config.API_URL}/profile/me`, null, {
    headers: {
      Authorization: 'Bearer ' + Token,
    },
  });
  return data;
};

//POST METHODE

//PUT METHODE
const putUpdateUser = async (Token, body) => {
  const {data} = await axios.put(`${config.API_URL}/profil/me`, body, {
    headers: {
      Authorization: 'Bearer ' + Token,
    },
  });

  return data;
};

//DELETE METHODE

export {getUserMe, putUpdateUser};
