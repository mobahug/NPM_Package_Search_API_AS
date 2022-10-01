<template>
  <div class="brews">
    <div class="search-results" v-for="brewery in list" :key="brewery.package">
      <ul>
        <li>
          <span class="title">Name:</span>
          <span class="brew">{{ brewery.package.name }}</span>
        </li>
        <li>
          <span class="title">Description:</span>
          <span class="brew">{{ brewery.package.description }}</span>
        </li>
        <li>
          <span class="title">Version:</span>
          <span class="brew">{{ brewery.package.version }}</span>
        </li>
        <hr />
      </ul>
    </div>
  </div>
</template>

<script>
import useBrewList from "../composition/item-list";

import { createComponent } from "@vue/composition-api";
export default createComponent({
  setup() {
    const { submitted, list, val, error, fetching } = useBrewList();
    return {
      val,
      list,
      submitted,
      error,
      fetching,
    };
  },
});
</script>

<style scoped>
.search-results {
  display: flex;
  width: 600px;
  text-align: left;
}
.brews {
  max-width: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}
ul {
  list-style-type: none;
  width: 100%;
}
li {
  display: flex;
  justify-content: space-between;
}
.brew {
  font-weight: bold;
}
</style>
