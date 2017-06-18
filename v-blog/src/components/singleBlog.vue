<template>
  <div id="single-blog">
      <h1>{{ this.data.blog.title }}</h1>
      <article>{{ this.data.blog.body }}</article>
  </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        data () {
            return {
                data: {
                    id: this.$route.params.id,
                    blog: {}
                }
            }
        },
        created () {
            var that = this;
            Axios.get('https://jsonplaceholder.typicode.com/posts/' + that.data.id)
            .then(function (data) {
                that.data.blog = data.data;
            });
        }
    }
</script>

<style lang="scss" scoped>
    #single-blog {
        max-width: 960px;
        margin: 0 auto;
    }
</style>
