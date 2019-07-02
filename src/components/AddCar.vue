<template>
    <div class="container-fluid">
        <form @submit.prevent="handleAdd">
            <div>
                <label for="brand">Brand</label>
                <input type="text" id="brand" v-model="newCar.brand" required>
            </div>
            <div>
                <label for="model">Model</label>
                <input type="text" id="model" v-model="newCar.model" required>
            </div>
            <div>
                <label for="year">Year</label><br>
                <select v-model="newCar.year">
                    <option v-for="(year, index) in years" :key="index" :value="year">{{ year }}</option>
                </select>
            </div>
            <div>
                <label for="maxSpeed">Maximum Speed</label>
                <input type="nubmer" id="maxSpeed" v-model="newCar.maxSpeed" required>
            </div>
            <div>
                <label for="numberOfDoors">Number of Doors</label>
                <input type="nubmer" id="numberOfDoors" v-model="newCar.numberOfDoors" required>
            </div>
            <div>
                <label for="isAutomatic">Automatic</label>
                <input type="checkbox" name="isAutomatic" id="isAutomatic" v-model="newCar.isAutomatic">
            </div>
            <div>
                <label for="engine">Engine</label><br>
                <input type="radio" name="diesel" for="engine" value="diesel" v-model="newCar.engine"> Diesel<br>
                <input type="radio" name="petrol" for="engine" value="petrol" v-model="newCar.engine">Petrol<br>
                <input type="radio" name="electric" for="engine" value="electric" v-model="newCar.engine">Electric<br>
                <input type="radio" name="hybrid" for="engine" value="hybrid" v-model="newCar.engine">Hybrid
            </div>
            <div>
                <button type="submit">Add Car</button>
            </div>
        </form>
    </div>
</template>

<script>
import { carsService } from '@/services/CarsService'

export default {
    data () {
        return {
            newCar: this.getDefaults(), 
            years: new Array(42).fill(1978).map((n, i) => n + i)          
        }
    },

    methods: {
        getDefaults () {
            return {
                brand: "",
                model: "",
                year: 0,
                maxSpeed: 0,
                isAutomatic: false,
                engine: "",
                numberOfDoors: 0
            }
        },

        handleAdd() {
            carsService.addCar(this.newCar);
            this.newCar = this.getDefaults();
            this.$router.push('/cars')
        }
    }

}
</script>

<style>

</style>
