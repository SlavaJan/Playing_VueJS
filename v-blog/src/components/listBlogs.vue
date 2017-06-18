<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>List blog titles</h1>
    <input type="text" v-model="search" placeholder="Search blogs">
    <div v-for="blog in filteredBlogs" class="single-blog">
        <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
    </div>
  </div>
</template>

<script>
    import Axios from 'axios';
    import search from '../mixins/search.js';

    export default {
        data() {
            return {
                blogs: [],
                search: ''
            }
        },
        methods: {

        },
        created () {
            var that = this;
            Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (data) {
                that.blogs = data.data.slice(0, 10);
            });
        },
        mixins: [search]
    }
</script>

<style lang="scss" scoped>
    #show-blogs {
        max-width: 800px;
        margin: 0 auto;
    }
    .single-blog {
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background-color: #eee;
        font-family: Arial;
    }
</style>