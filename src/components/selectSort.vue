<template>
  <select @change="onChange">
    <option v-for="option of options" :key="option.value" :value="option.value">
      {{ option.title }}
    </option>
  </select>
</template>

<script>
export default {
  name: "selectSort",
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
select {
  font-size: 12px;
  text-align: center;
  padding: 10px 16px;
  background-color: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: #b4b4b4;
  transition: box-shadow 0.15s, 0.15s;

  @media screen and (max-width: 767px) {
    margin: 0 10px;
  }

  & option {
    text-align: left;
  }
}
</style>
