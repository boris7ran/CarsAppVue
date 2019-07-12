import axios from 'axios'

export default class UsersService{
  constructor () {
    axios.defaults.baseURL = 'http://localhost:8000/api/';
  }

  loginUser(user){
    return axios.post('login', user);
  }
}

export const usersService = new UsersService();