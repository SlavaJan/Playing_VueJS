<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>



<script>
import { bus } from'../main.js';
export default {
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String
    }
  },
  methods: {
    changeTitle: function () {
      // this.$emit("changeTitle", "Vue Wizards");
      this.title = 'Vue Wizards';
      bus.$emit('titleChanged', 'Vue Wizards');
    }
  }
}
</script>

<style scoped>
    header {
        background-color: lightgreen;
        padding: 10px;
    }
    h1 {
        color: #222;
        text-align: center;
    }
</style>