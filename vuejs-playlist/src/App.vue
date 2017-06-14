<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <keep-alive>
        <component v-bind:is="component">
          <div slot="form-header">
            <h3>This is the title of the form</h3>
            <p>Information about the form</p>
          </div>
          <div slot="form-fields">
            <input type="text" placeholder="name" required> <br>
            <input type="password" placeholder="password" required>
          </div>
          <div slot="form-controls">
            <button>Submit</button>
          </div>
        </component>
    </keep-alive>
    <button v-on:click="component='form-helper'">Show form</button>
    <button v-on:click="component='form-rus'">Показать форму</button>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Ninjas from './components/ninjas.vue';
import FormHelper from './components/formHelper.vue';
import FormRus from './components/formRus.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'ninjas': Ninjas,
    'form-helper': FormHelper,
    'form-rus': FormRus
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
      ],
       component: 'form-rus'
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
