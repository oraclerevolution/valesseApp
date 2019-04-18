//API/api.js

const API_URL = 'http://127.0.0.1:3000';

export function getChapitreFromApi(){
    const url = API_URL+'/showList'
    return fetch(url)
        .then((res) => res.json())
        .catch((err) => console.log(err))
}