<template>
  <div id="app">
    <ul>
      <li><router-link to="/cars">Cars</router-link></li> 
    </ul>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
