<template>
  <div>
    <app-header></app-header>
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Ninjas from './components/ninjas.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'ninjas': Ninjas
  },
  data () {
    return {
      title: 'Ninja app',
      ninjas: [
        {name: 'Ryu', speciality: 'Dragon kick', show: 'false'},
        {name: 'Ken', speciality: 'Dragon punch', show: 'false'},
        {name: 'Dan', speciality: 'Weakling slap', show: 'false'},
        {name: 'Sakura', speciality: 'Spin kick', show: 'false'},
        {name: 'Akuma', speciality: 'Demon strike', show: 'false'},
        {name: 'Gouken', speciality: 'God smash', show: 'false'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
