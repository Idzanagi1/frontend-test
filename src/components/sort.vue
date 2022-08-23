<template>
  <div class="sort">
    <select-sort-vue :options="optionSortingType" @change="setSortingType" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import selectSortVue from "./selectSort.vue";

export default {
  name: "sort",
  components: {
    selectSortVue
  },
  data: () => ({
    optionSortingType: [
      { title: "По наименованию", value: "title" },
      { title: "По цене min", value: "ascending" },
      { title: "По цене max", value: "descending" },
    ],
  }),
  methods: {
    ...mapActions(["sort_type"]),
    setSortingType(event) {
      this.sort_type(event.target.value);
    },
  },
  computed: {
    ...mapState({
      sortingType: (state) => state.sortingType,
    }),
  },
};
</script>

<style lang="scss" scoped>
.sort {
  display: flex;
  justify-content: flex-end;
  grid-area: sort;
}
</style>
