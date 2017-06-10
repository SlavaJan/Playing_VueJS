<template>
  <footer>
    <p>{{ copyright }}  {{ title }}</p>
  </footer>
</template>



<script>
import {bus} from'../main.js';

export default {
  data () {
    return {
      copyright: 'Copyright 2017'
    }
  },
  props: {
    title: {
      type: String
    }
  },
  created() {
    bus.$on('titleChanged', (data ) => {
      this.title = data;
    })
  }
}
</script>

<style scoped>
    footer {
        background-color: #222;
        padding: 6px;
    }
    p {
        color: lightgreen;
        text-align: center;
    }
</style>