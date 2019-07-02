<template>
    <div>
        <table class="table table-striped title-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>BRAND</th>
                    <th>MODEL</th>
                    <th>YEAR</th>
                    <th>MAX SPEED</th>
                    <th>AUTOMATIC</th>
                    <th>ENGINE</th>
                    <th>DOORS</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(car, index) in cars" :key="index">
                    <td>{{ car.id }}</td>
                    <td>{{ car.brand }}</td>
                    <td>{{ car.model }}</td>
                    <td>{{ car.year }}</td>
                    <td>{{ car.maxSpeed }}</td>
                    <td>{{ car.isAutomatic }}</td>
                    <td>{{ car.engine }}</td>
                    <td>{{ car.numberOfDoors }}</td>
                    <td>
                        <router-link :to="routeToEdit(car)">
                            <button>Edit</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { carsService } from '@/services/CarsService'

export default {
    data() {
        return {
            cars: []
        }
    },

    created() {
        carsService.getAll()
            .then(response => {
                this.cars = response.data;
                console.log(response)
            }).catch(error => {
                alert(error);
            });
    },

    methods: {
        routeToEdit (car) {
            return `/edit/${car.id}`
        }
    }
}
</script>

<style>

</style>
