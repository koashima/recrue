import tokenService from './tokenService';

const BASE_URL = '/api/prospects'

export default {
  create,
  getAll,
  update,
  deleteOne
}

function getAll() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options, {mode: "cors"})
  .then(res => res.json());
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

function update(prospect) {
  const url = `${BASE_URL}/${prospect._id}`
  return fetch(url, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
  },
     body: JSON.stringify(prospect)
  }, {mode: "cors"}).then(res => res.json());
}

function deleteOne(id) {
  const options = {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }
  return fetch(`${BASE_URL}/${id}`, options).then(res => res.json())
}