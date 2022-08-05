<template>
  <div class="block">
    <div
      class="cell"
      :class="{ cell_filled: data.develop, cell_active: data.id === showPopup }"
      @click="updateShowPopup(data.id)"
    >
      <div class="cell__header">
        <span v-if="index <= 6">{{ data.dayString }}, </span>
        {{ data.date.day }}
      </div>
      <div class="cell__content" v-if="data.develop">
        <div class="cell__title">
          {{ data.develop.title }}
        </div>
        <div class="cell__description">
          {{ data.develop.members }}
        </div>
      </div>
    </div>
    <Popup v-if="showPopup === data.id" :development="data.develop" :date="data.date"/>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

import Popup from "@/components/PopupLayyot.vue";

export default {
  components: {
    Popup,
  },
  props: {
    data: {
      require: false,
    },
    index: {
      require: true,
    },
  },
  computed: {
    ...mapState(["showPopup"]),
  },
  methods: {
    ...mapMutations(["updateShowPopup"]),
  },
};
</script>

<style lang="scss" scoped>
.block {
  position: relative;
}
.cell {
  height: 120px;
  padding: 8px;
  background: var(light);
  border: 0.5px solid var(--dark-200);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--dark-100);
  transition: all 0.3s;
  cursor: pointer;

  &:active {
    box-shadow: 0px 0px 10px 2px var(--blue-300);
  }

  &:hover {
    background: var(--neutral-100);
  }

  &__header {
    margin-bottom: 8px;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  &__title {
    margin-bottom: 8px;
    color: var(--dark-200);
  }

  &_filled {
    background: var(--blue-100);

    &:hover {
      background: var(--blue-200);
    }
  }

  &_active {
    box-shadow: 0px 0px 10px 2px var(--blue-300);
  }
}
</style>