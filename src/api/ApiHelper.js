import { useState } from 'react';

export default ApiHelper = (apiData) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const request = async () => {
    const response = await apiData();
    if (!response.ok) {
      return setError(true)
    }
    setError(false)
    setData(response.data)
  };

  return { data, error, request}
}