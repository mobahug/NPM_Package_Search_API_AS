<template>
  <div class="items">
    <section class="position">
      <h2>NPM Package Search</h2>
      <form @submit.prevent="submitted">
        <input v-model="val" type="text" />
        <button>Submit</button>
        <button @click="goBack()">Go Back</button>
      </form>
    </section>
    <div v-if="error">
      <h2>erorr!! {{ error }}</h2>
    </div>
    <div v-if="fetching"><h2>Loading...</h2></div>
    <PackageComponent v-if="item" :item="this.item" />
    <div v-else>
      <div class="search-results" v-for="(packages, i) in list" :key="i">
        <ul>
          <li>
            <span class="title">Name:</span>
            <span class="brew" v-if="packages.package.name">{{
              packages.package.name
            }}</span>
          </li>
          <li>
            <span class="title">Description:</span>
            <span class="brew" v-if="packages.package.description">{{
              packages.package.description
            }}</span>
          </li>
          <li>
            <span class="title">Version:</span>
            <span class="brew" v-if="packages.package.version">{{
              packages.package.version
            }}</span>
          </li>
          <li>
            <span class="title"></span>
            <button
              v-if="packages.package"
              @click="selectItem(packages.package)"
            >
              More
            </button>
          </li>
          <hr />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import useItemList from "../composition/item-list";
import { createComponent } from "@vue/composition-api";
import Package from "./Package.vue";
import { ref } from "@vue/composition-api";
import PackageComponent from "./PackageComponent.vue";

export default createComponent({
  components: { Package, PackageComponent },
  setup() {
    const item = ref(null);
    const selectItem = packages => {
      item.value = packages;
      console.log(item);
    };
    const goBack = () => {
      item.value = null;
    };
    const { submitted, list, val, error, fetching } = useItemList();
    console.log(item.value);

    return {
      val,
      list,
      submitted,
      error,
      fetching,
      item,
      selectItem,
      goBack
    };
  }
});
</script>

<style scoped>
.position {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: rgb(238, 238, 238);
  padding-bottom: 5%;
}
.search-results {
  display: flex;
  width: 100%;
  max-width: 500px;
  text-align: left;
  margin-top: 95px;
  background: rgb(240, 240, 240);
  border-radius: 5%;
}
.items {
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
  text-align: right;
}
</style>
