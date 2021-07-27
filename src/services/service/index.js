import axios from 'react-native-axios';
import config from '../../../config';

//GET METHODE
const getListHospital = async (Token, location, filter) => {
  const {data} = await axios.get(
    `${config.API_URL}hospital/?${location ? `&location=${location}` : ''}${
      filter ? `&filter=${filter}` : ''
    }`,
    null,
    {
      headers: {
        Authorization: 'Bearer ' + Token,
      },
    },
  );
  return data;
};

const getListLab = async (Token, location, search) => {
  const {data} = await axios.get(
    `${config.API_URL}laboratory/?${location ? `&location=${location}` : ''}${
      search ? `&search=${search}` : ''
    }`,
    null,
    {
      headers: {
        Authorization: 'Bearer ' + Token,
      },
    },
  );
  return data;
};

const getListAmbulance = async (Token, location, search) => {
  console.log(
    `${config.API_URL}ambulance/?${
      location !== undefined ? `&location=${location}` : ''
    }${search !== undefined ? `&search=${search}` : ''}`,
  );
  const {data} = await axios.get(config.API_URL + 'ambulance/', {
    headers: {Authorization: 'Bearer ' + Token},
  });

  return {data};
};

const getListMedicine = async Token => {
  const {data} = await axios.get(`${config.API_URL}/medicine`, null, {
    headers: {
      Authorization: 'Bearer ' + Token,
    },
  });
  return data;
};

//POST METHODE

//PUT METHODE

//DELETE METHODE

export {getListAmbulance, getListHospital, getListLab, getListMedicine};
