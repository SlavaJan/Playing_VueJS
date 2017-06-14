<template>
  <div>
      <h1>Заполните форму</h1>
      <form>
          <div id="form-header">
              
          </div>
          <div id="form-fields">
            <input type="text" placeholder="ФИО" required> <br>
            <input type="password" placeholder="пароль" required>
          </div>
          <div id="form-controls">
              <button>Отправить</button>
          </div>
          <div id="useful-links">
              <ul>
                <li><a href="#">Ссылка 1</a></li>
                <li><a href="#">Ссылка 2</a></li>
                <li><a href="#">Ссылка 3</a></li>
                <li><a href="#">Ссылка 4</a></li>
              </ul>
          </div>
      </form>
  </div>
</template>



<script>

export default {
  data () {
    return {
      
    }
  }

}
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0;
    }
    li {
        margin-bottom: 10px;
    }
    input {
        margin: 10px 0;
    }
</style>