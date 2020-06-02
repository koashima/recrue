import tokenService from './tokenService';

const BASE_URL = '/api/prospects'

export default {
  create,

}

function create(prospect){
  return fetch(BASE_URL, {
      method:'POST',
      headers:{
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()

  },
      body: JSON.stringify(prospect)
  }, {mode: "cors"}).then(res => res.json());
}
