<template>
  <div class="popup" :class="{ popup_right: scrollWidth }">
    <div class="popup__cross" @click="updateShowPopup()"></div>
    <form @submit.prevent>
      <div class="popup__input" v-if="!development.title">
        <Input
          placeholder="Событие"
          v-model.trim="title"
          name="title"
          :valid="!$v.title.$error"
        />
      </div>

      <div v-else class="popup__title">
        {{ development.title }}
      </div>

      <!-- Зачем здесь это поле???? -->
      <div v-if="!development.date" class="popup__input">
        <Input
          placeholder="День, месяц, год"
          :value="dateState"
          disabled
          :valid="!$v.dateState.$error"
        />
      </div>

      <div v-else class="popup__date">
        {{ development.dateShort }}
      </div>

      <div v-if="!development.people" class="popup__input">
        <Input
          placeholder="Имена участников"
          v-model.trim="people"
          name="people"
          :valid="!$v.people.$error"
        />
      </div>

      <div v-else class="popup__people">
        <div class="popup__people-subtitle">Участники:</div>
        {{ development.people }}
      </div>

      <div class="popup__input" v-if="!development.description">
        <Input
          placeholder="Описание"
          textarea
          v-model.trim="description"
          name="description"
        />
      </div>

      <div class="popup__description" v-else>
        {{ development.description }}
      </div>

      <div class="popup__btns">
        <Btn extra text="Готово" :disabled="$v.$invalid" @click="addDevelop(date)"/>
        <Btn extra text="Удалить" @click="delDevelop(development.date)" />
      </div>
    </form>
  </div>
</template>

<script>
import Input from "@/components/InputLayout.vue";
import Btn from "@/components/ButtonLayout.vue";

import { required } from "vuelidate/lib/validators";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    Input,
    Btn,
  },
  props: {
    development: {
      type: Object,
    },
    date: {
      type: Object,
      require: true,
    },
  },
  computed: {
    ...mapState(["scrollWidth"]),
    title: {
      get() {
        return this.$store.state.newDevelop.title;
      },
      set(value) {
        this.$v.title.$touch();
        this.updateInput({ state: "newDevelop", target: value });
      },
    },

    dateState: {
      get() {
        return this.$store.state.newDevelop.date;
      },
      set(value) {
        this.$v.dateState.$touch();
        this.updateInput({ state: "newDevelop", target: value });
      },
    },

    people: {
      get() {
        return this.$store.state.newDevelop.people;
      },
      set(value) {
        this.$v.people.$touch();
        this.updateInput({ state: "newDevelop", target: value });
      },
    },

    description: {
      get() {
        return this.$store.state.newDevelop.description;
      },
      set(value) {
        this.updateInput({ state: "newDevelop", target: value });
      },
    },
  },
  methods: {
    ...mapMutations([
      "updateShowPopup",
      "updateInput",
      "delDevelop",
      "updateScrollWidth",
      "addDevelop"
    ]),
  },
  validations: {
    title: {
      required: required,
    },
    dateState: {
      required: required,
    },
    people: {
      required: required,
    },
  },
  mounted() {
    this.updateScrollWidth();
  },
};
</script>

<style lang="scss" scoped>
.popup {
  position: absolute;
  z-index: 5;
  min-width: 290px;
  padding: 28px 12px 12px;
  background: var(--light);
  filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.25));
  right: 0;
  top: 0;
  transform: translateX(calc(100% + 10px));

  &__cross {
    position: absolute;
    right: 12px;
    top: 6px;
    background: var(--neutral-200);
    width: 20px;
    height: 20px;
    cursor: pointer;
    mask: url("../assets/icons/cross.svg") center center / 6px no-repeat;
  }

  &__input {
    margin-bottom: 8px;
  }
  &__btns {
    .btn {
      &:first-child {
        margin-right: 20px;
      }
    }
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 9px;
    transform: translateX(-100%);
    display: block;
    z-index: 30;
    border: 8px solid transparent;
    border-right: 8px solid var(--light);
  }

  &__title {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: var(--dark-200);
    margin-bottom: 16px;
  }

  &__date {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: var(--dark-200);
    margin-bottom: 16px;
  }
  &__people {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: var(--dark-200);
    margin-bottom: 8px;

    &-subtitle {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      color: var(--dark-100);
      margin-bottom: 4px;
    }
  }

  &__description {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: var(--dark-200);
    margin-bottom: 16px;
  }

  &_right {
    left: 0;
    transform: translateX(calc(-100% - 10px));

    &::before {
      transform: translateX(100%) rotate(180deg);
      right: 0;
    }
  }
}
</style>