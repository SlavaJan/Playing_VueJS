<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label for="blog-title">Blog title
        <input id="blog-title" type="text" v-model="blog.title" required>
      </label>
      <label for="blog-content">Blog content
        <textarea id="blog-content" v-model.lazy="blog.content"></textarea>
      </label>
      <div id="checkboxes">
        <label>Ninjas<input type="checkbox" value="Ninjas" v-model="blog.categories" /></label>
        <label>Wizards<input type="checkbox" value="Wizards" v-model="blog.categories" /></label>
        <label>Demons<input type="checkbox" value="Demons" v-model="blog.categories" /></label>
        <label>Gods<input type="checkbox" value="Gods" v-model="blog.categories" /></label>
      </div>
      <label>Author
        <select v-model="blog.author">
          <option v-for="author in authors">{{ author }}</option>
        </select>
      </label>
      <button v-on:click.prevent="post" v-ripple>Submit post</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for posting!</h3>
    </div>
    <h3>Your post preview</h3>
    <div id="preview">
      <p class="preview-title">{{ blog.title }}</p>
      <p class="preview-content">{{ blog.content }}</p>
      <p>Blog categories: </p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  
  data () {
    return {
      blog: {
        title:'',
        content:'',
        categories: [],
        author: ''
      },
      authors: ['Author 1', 'Author 2', 'Author 3'],
      submitted: false
    }
  },
  methods: {
    post: function () {
      var that = this;
      Axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userId: '1'
      })
      .then(function (data) {
        that.submitted = true;
        console.log(data);
      })
      .catch(function (error) {
        console.warn(error);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
   * {
    box-sizing: border-box;
  }
  #add-blog {
    margin: 20px auto;
    max-width: 500px;
  }
  label {
    display: block;
    margin: 20px 0 10px;
  }
  input[type=text],
  textarea {
    display: block;
    width: 100%;
    padding: 8px;
  }
  #preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px auto;
  }
  .preview-title {
    display: block;
    padding: 15px;
    background-color: #dedede;
    font-size: 22px;
    font-family: Verdana;
    text-align: center;
    text-transform: uppercase;
  }
  .preview-content {
    margin: 15px;
    font-size: 16px;
    font-family: lato, serif;
  }
  h3 {
    margin-top: 40px;
  }
  #checkboxes input {
    display: inline-block;
    margin-right: 10px;
  }
  #checkboxes label {
    display: inline-block;
    user-select: none;
    -moz-user-select: none;
  }
  button {
    padding: 10px 20px;
    background-color: lighten(green, 25%);
    border: none;
    outline: none;
    transition: all 0.15s;
    &:hover {
      transform: translate(-2px, -2px);
      box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.4);
    }
    &:active {
      transform: translate(0, 0);
      box-shadow: none;
    }
  }
</style>
