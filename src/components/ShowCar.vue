<template>
  <div>
    <div class="container-fluid">
      <ul>
        <li>
          Brand: {{ car.brand}}
        </li>
        <li>
          Model: {{ car.model}}
        </li>
        <li>
          Year of Production: {{ car.year}}
        </li>
        <li>
          Maximum Speed: {{ car.maxSpeed}}
        </li>
        <li>
          Automatic: {{ car.isAutomatic}}
        </li>
        <li>
          Doors: {{ car.numberOfDoors}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { carsService } from '@/services/CarsService'

export default {
  data() {
    return {
      car: ''
    }
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      carsService.get(vm.$route.params.id)
        .then(response => {
          vm.car = response.data;
        }).catch(error => {
          alert(error);
        })
    })
  },
}
</script>

<style>

</style>
