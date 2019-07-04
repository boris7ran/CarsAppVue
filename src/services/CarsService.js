import axios from 'axios'

export default class CarsService {
    constructor () {
        axios.defaults.baseURL = 'http://localhost:3000/api/';
    }

    getAll () {
        return axios.get('cars');
    }

    addCar (newCar) {
        delete newCar.id;
        return axios.post('cars', newCar)
    }

    get (id) {
        return axios.get('cars/' + id);
    }

    edit (id, editedCar) {
        return axios.put('cars/' + id, editedCar)
    }

    delete (id) {
        return axios.delete('cars/' + id);
    }
}

export const carsService = new CarsService();