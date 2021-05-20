import axios from 'axios';
import React from 'react';

// () {
//   return fetch ('www.refugerestrooms.org/api/v1/restrooms/by_location?lat=45.50527180254351&lng=-122.67506901733977')
//   .then((response) => response.json())
//   .catch((error) => {
//     console.error(error);
//   })
// }

const PortMapApiAsync = async () => {
  try {
    const response = await axios.get(
      'www.refugerestrooms.org/api/v1/restrooms/by_location?lat=45.50527180254351&lng=-122.67506901733977',
    );
    console.log(response);
    return (JSON.stringify(response.data));
  } catch (error) {
    // handle error
    console.log("This is error: " + error.message);
  }
};

export default PortMapApiAsync;