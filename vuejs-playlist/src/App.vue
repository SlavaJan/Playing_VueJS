<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <app-footer v-bind:title="title"></app-footer>
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
      title: 'Vue Ninjas',
      ninjas: [
        {name: 'Ryu', speciality: 'Dragon kick', show: 'false'},
        {name: 'Ken', speciality: 'Dragon punch', show: 'false'},
        {name: 'Dan', speciality: 'Weakling slap', show: 'false'},
        {name: 'Sakura', speciality: 'Spin kick', show: 'false'},
        {name: 'Akuma', speciality: 'Demon strike', show: 'false'},
        {name: 'Gouken', speciality: 'God smash', show: 'false'}
      ]
    }
  },
  methods: {
    updateTitle: function (updatedTitle) {
      this.title = updatedTitle;
    }
  }
}
</script>

<style scoped>

</style>
