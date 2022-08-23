<template>
  <div class="wrapper">
    <add-card-vue />
    <catalog-vue />
    <sort-vue />
  </div>
</template>

<script>
import addCardVue from "./components/addCard.vue";
import catalogVue from "./components/catalog.vue";
import sortVue from "./components/sort.vue";
export default {
  components: {
    addCardVue,
    catalogVue,
    sortVue
  },
};
</script>

<style lang="scss">
.wrapper {
  padding: 32px;
  gap: 16px;
  display: grid;
  grid-template-areas: "addCard sort""addCard catalog";
  grid-template-columns: min-content 1fr;
  grid-template-rows: min-content 1fr;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 380px) {
    padding: 16px;
  }
}
</style>
