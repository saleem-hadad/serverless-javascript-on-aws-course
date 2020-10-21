<template>
  <Navbar />
  <SearchForm />
  <Videos />
</template>

<script>
import Navbar from './components/Navbar.vue'
import SearchForm from './components/SearchForm.vue'
import Videos from './components/Videos.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    SearchForm,
    Videos
  }
}
</script>
