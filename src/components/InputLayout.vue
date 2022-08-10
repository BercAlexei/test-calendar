<template>
  <div class="input-container">
    <input
      type="text"
      class="input"
      :class="{ input_error: !valid }"
      :value="value"
      @input="$emit('input', $event.target)"
      :disabled="disabled"
      :placeholder="placeholder"
      :name="name"
      v-if="!textarea"
    />
    <textarea
      v-if="textarea"
      cols="30"
      rows="10"
      class="input"
      :value="value"
      @input="$emit('input', $event.target)"
      :disabled="disabled"
      :placeholder="placeholder"
      :name="name"
    ></textarea>
    <button
      class="icon"
      @mousedown="clearInput({ state: 'newDevelop', name: name })"
      v-if="!textarea"
      type="button"
    >
      <img src="assets/icons/cross.svg" alt="cross" />
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },

    name: {
      type: String,
      require: true,
    },
    textarea: {
      type: Boolean,
    },
    valid: {
      type: Boolean,
    },
  },
  methods: {
    ...mapMutations(["clearInput"]),
  },
};
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  padding: 6px 12px;
  width: 100%;
  background: var(--light);
  border: 1px solid var(--neutral-200);
  box-shadow: inset 0px 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: var(--dark-200);
  outline: none;
  resize: none;

  &::placeholder {
    color: var(--neutral-200);
  }

  &:focus {
    padding-right: 30px;
    border: 1px solid var(--blue-200);

    & + .icon {
      cursor: pointer;
      opacity: 1;
      z-index: 1;
    }
  }

  &_error {
    border: 1px solid var(--red);
    &::placeholder {
      color: var(--red);
    }
  }

  &:disabled {
    color: var(--neutral-200);
    background: var(--neutral-100);
  }

  &-container {
    position: relative;
    display: inline-block;
    width: 100%;

    .icon {
      position: absolute;
      top: 50%;
      right: 4px;
      transform: translateY(-50%);
      height: 20px;
      width: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      opacity: 0;
      background: inherit;
      border: none;
      outline: none;
      z-index: -1;

      img {
        width: 6px;
        height: 6px;
      }
    }
  }
}
</style>