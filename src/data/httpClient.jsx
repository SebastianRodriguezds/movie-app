// En '/src/data/httpClient.jsx'
const apiKey = '210ebfb1d744fbcc3553bbf7429beaf0'; 

export function get(path) {
  const url = `https://api.themoviedb.org/3${path}?api_key=${apiKey}`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
  };

  return fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error en la solicitud: ${res.status} - ${res.statusText}`);
      }
      return res.json();
    })
    .catch((err) => {
      console.error('Error:', err);
      throw err;
    });
}
