<template>
  <div class="article-rating">
    <strong>What do you think of the article?</strong>
    <ul>
      <li>
        <input id="radio1" type="radio" value="1" name="radio" />
        <label for="radio1">😡</label>
      </li>
      <li>
        <input id="radio2" type="radio" value="2" name="radio" />
        <label for="radio2">🙁</label>
      </li>
      <li>
        <input id="radio3" type="radio" value="3" name="radio" />
        <label for="radio3">😐</label>
      </li>
      <li>
        <input id="radio4" type="radio" value="3" name="radio" />
        <label for="radio4">😀</label>
      </li>
      <li>
        <input id="radio5" type="radio" value="3" name="radio" />
        <label for="radio5">😍</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ArticleRatingVue'
}
</script>

<style lang="scss" scoped>
.article-rating {
  text-align: center;
  margin-top: 1rem;

  ul {
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;

    li {
      display: inline-block;
      margin: 0;
      padding: 0;

      label {
        cursor: pointer;
        display: inline-block;
        border: 1px solid #e0e3e9;
        padding: 5px 10px;
        margin: 2px 3px;
        border-radius: 4px;
        white-space: nowrap;
      }

      input {
        visibility: hidden;
        display: none;
      }

      input:checked + label {
        background-color: #f2f9ff;
        border-color: #689bd2;
      }
    }
  }
}
</style>
