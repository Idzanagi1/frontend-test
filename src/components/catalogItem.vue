<template>
  <div class="product">
    <div class="product__delete" @click="deleteProduct">
      <img src="../assets/img/delete.svg" alt="" />
    </div>
    <img class="product__img" :src="productData.img" alt="" />
    <div class="product__info info">
      <div class="info__name">
        {{ productData.name }}
      </div>
      <div class="info__descr">{{ productData.descr }}</div>
      <div class="info__price">{{ priceMask }} руб.</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "catalogItem",
  props: {
    productData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapActions(["remove_item"]),
    deleteProduct() {
      this.remove_item(this.productData.id);
    },
  },
  computed: {
    priceMask() {
      return this.productData.price
        .toString()
        .replaceAll(" ", "")
        .split("")
        .map((num, i, arr) => {
          return (arr.length - 1 - i) % 3 === 0 && i !== arr.length - 1
            ? num + " "
            : num;
        })
        .join("");
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fffefa;
  border-radius: 4px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  transition: 0.2s ease-in-out;

  @media screen and (max-width: 767px) {
    max-width: 332px;
  }

  &:hover {
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1),
      0px 6px 10px rgba(0, 0, 0, 0.1);
    transition: 0.2s ease-in-out;
  }

  &:hover &__delete {
    opacity: 1;
    top: -8px;
    right: -8px;
  }

  &__delete {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background-color: #ff8484;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    top: 0;
    right: 0;
    opacity: 0;
    transition: 0.2s ease-in-out;
  }

  &__img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 4px 4px 0px 0px;
  }
}

.info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  padding: 16px;
  padding-bottom: 24px;

  &__name {
    font-size: 20px;
    font-weight: 600;
  }

  &__descr {
    font-size: 16px;
  }

  &__price {
    font-weight: 600;
    font-size: 24px;
    padding-top: 10px;
    margin-top: auto;
    color: #3f3f3f;
  }
}
</style>
