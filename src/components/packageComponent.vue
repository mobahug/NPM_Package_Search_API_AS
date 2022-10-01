<template>
  <div>
    <div class="search-results">
      <ul v-if="item">
        <li v-if="item.name">
          <span class="title">Name:</span>
          <span class="item">{{ item.name }}</span>
        </li>
        <li v-if="item.version">
          <span class="title">Version:</span>
          <span class="item">{{ item.version }}</span>
        </li>
        <li v-if="item.author">
          <span class="title">Author:</span>
          <span class="item">{{ item.author.name }}</span>
        </li>
        <li v-if="item.date">
          <span class="title">Date:</span>
          <span class="item">{{ item.date }}</span>
        </li>
        <li v-if="item.publisher">
          <span class="title">Publisher:</span>
          <span class="item">{{ item.publisher.email }}</span>
        </li>
        <li v-if="item.description">
          <span class="title">Description:</span>
          <span class="item">{{ item.description }}</span>
        </li>
        <li v-if="item.keywords">
          <span class="title">Keywords:</span>
          <span class="item">{{ item.keywords[0] }}</span>
        </li>
        <li v-if="item.links.npm">
          <span class="title">Links:</span>
          <span class="item">{{ item.links.npm }}</span>
        </li>
        <li v-if="item.links">
          <span class="title"></span>
          <span class="item">{{ item.links.homepage }}</span>
        </li>
        <hr />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.search-results {
  display: flex;
  width: 100%;
  max-width: 500px;
  text-align: left;
  margin-top: 95px;
  background: rgb(240, 240, 240);
  border-radius: 5%;
}

ul {
  list-style-type: none;
  width: 100%;
}
li {
  display: flex;
  justify-content: space-between;
}
.item {
  font-weight: bold;
  text-align: right;
}

hr {
  width: 100%;
}
</style>
