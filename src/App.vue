<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li clas="nav-item"><router-link to="/cars">Cars</router-link></li> 
            <li clas="nav-item"><router-link to="/cars/add">Add</router-link></li> 
          </ul>
        </div>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
