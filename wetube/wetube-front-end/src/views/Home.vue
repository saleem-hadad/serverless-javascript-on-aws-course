<template>
  <SearchForm />
  <Videos />
</template>

<script>
import SearchForm from '../components/SearchForm.vue'
import Videos from '../components/Videos.vue'

export default {
  name: 'App',
  components: {
    SearchForm,
    Videos
  }
}
</script>