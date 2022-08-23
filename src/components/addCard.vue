<template>
  <div class="addCard">
    <h1 class="title">Добавление товара</h1>
    <form class="form" @submit.prevent="submitHandler">
      <div class="form__field">
        <label for="name"><span>Наименование товара</span></label>
        <input @focus="onFocus" type="text" placeholder="Введите наименование товара" v-model="name"
          :class="{ error: !nameIsValid }" />
        <small class="form__valid" v-if="!nameIsValid">
          Поле является обязательным!
        </small>
      </div>
      <div class="form__field">
        <label for="descr">Описание товара</label>
        <textarea @focus="onFocus" rows="4" name='' placeholder="Введите описание товара" v-model="descr">
        </textarea>
      </div>
      <div class="form__field">
        <label for="url"><span>Ссылка на изображения товара</span></label>
        <input @focus="onFocus" type="text" placeholder="Введите ссылку" v-model="img"
          :class="{ error: !imgIsValid }" />
        <small class="form__valid" v-if="!imgIsValid">
          Поле является обязательным!
        </small>
      </div>
      <div class="form__field">
        <label for="price"><span>Цена товара</span></label>
        <input @focus="onFocus" type="number" placeholder="Введите цену" v-model="price"
          :class="{ error: !priceIsValid }" />
        <small class="form__valid" v-if="!priceIsValid">
          Поле является обязательным!
        </small>
      </div>
      <button :disabled="!formIsValid || !this.isFocused" class="btn">
        Добавить товар
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'addCard',
  data: () => ({
    img: '',
    name: '',
    descr: '',
    price: '',
    isFocused: false,
  }),
  methods: {
    ...mapActions(['add_card']),
    submitHandler() {
      if (this.formIsValid) {
        this.add_card({
          img: this.img,
          name: this.name,
          descr: this.descr,
          price: this.price,
        });
        this.name = '';
        this.descr = '';
        this.img = '';
        this.price = '';
        this.isFocused = false;
      }
    },
    onFocus() {
      this.isFocused = true;
    },
  },
  computed: {
    nameIsValid() {
      return !!this.name || !this.isFocused;
    },
    imgIsValid() {
      return !!this.img || !this.isFocused;
    },
    priceIsValid() {
      return typeof this.price === 'number' || !this.isFocused;
    },
    formIsValid() {
      return this.nameIsValid && this.priceIsValid && this.imgIsValid;
    },
  },
};
</script>

<style lang="scss" scoped>
.addCard {
  position: sticky;
  align-self: flex-start;
  top: 32px;
  grid-area: addCard;

  @media screen and (max-width: 767px) {
    position: static;
    align-self: center;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    line-height: 35px;
    margin-bottom: 16px;

    @media screen and (max-width: 767px) {
      text-align: center;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 22px 24px;
    width: 332px;
    max-width: 100%;
    background-color: #fffefa;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;

    @media screen and (max-width: 380px) {
      width: 280px;
    }

    &__valid {
      font-size: 8px;
      color: #ff8484;
    }

    &__field {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;

      & label {
        position: relative;
        font-size: 10px;
        color: #49485e;
        letter-spacing: -0.02em;
        line-height: 13px;

        & span {
          position: relative;

          &::after {
            content: '';
            display: block;
            position: absolute;
            top: -1px;
            right: -5px;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: #ff8484;
          }
        }
      }

      & input {
        padding: 9px 16px;
        background: #fffefb;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;

        &.error {
          border: 1px solid #ff8484;
        }

        &::placeholder {
          font-size: 12px;
          color: #b4b4b4;
          line-height: 15px;
        }
      }

      & textarea {
        all: unset;
        background: #fffefb;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        padding: 9px 16px;

        &::placeholder {
          font-size: 12px;
          line-height: 15px;
          color: #b4b4b4;
        }
      }
    }

    .btn {
      font-family: "Inter", sans-serif;
      font-size: 12px;
      font-weight: 600;
      line-height: 15px;
      margin-top: 8px;
      padding: 11px 0;
      border-radius: 10px;
      color: #ffffff;
      background-color: #7bae73;
      cursor: pointer;

      &:disabled {
        background-color: #eeeeee;
        color: #b4b4b4;
      }
    }
  }
}
</style>
