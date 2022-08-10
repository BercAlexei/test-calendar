<template>
  <button
    class="btn"
    :class="{ btn_extra: extra, btn_icon: icon }"
    :disabled="disabled"
    @click="$emit('click')"
    :type="type"
  >
    <svg
      v-if="icon"
      class="icon"
      :class="{
        icon_left: optionIcon.direction === 'left',
        icon_small: optionIcon.size === 'small',
      }"
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1158 6.52066L2.24034 0.462622C1.83045 0.182655 1.41746 0.034483 1.07419 0.034483C0.410533 0.034483 0 0.56553 0 1.45444V14.5476C0 15.4355 0.410016 15.9655 1.07212 15.9655C1.41591 15.9655 1.82231 15.8172 2.2331 15.5365L11.1127 9.47856C11.6838 9.08834 12 8.56322 12 7.99929C12.0001 7.43575 11.6875 6.91076 11.1158 6.52066Z"
      />
    </svg>

    <span v-else>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    extra: {
      type: Boolean,
    },
    icon: {
      type: Boolean,
    },
    optionIcon: {
      type: Object,
    },
    type : {
      type: String, 
      default: 'button'
    }
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 6px 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: var(--light);
  background: var(--blue-300);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: var(--blue-200);
  }

  &:disabled {
    cursor: default;
    background: var(--neutral-200);

    &:active {
      background: var(--neutral-200);
    }
  }

  &:active {
    background: var(--blue-100);
  }

  &_extra {
    padding: 2px 6px;
    background: var(--light);
    color: var(--dark-200);
    box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    path {
      fill: var(--dark-100);
    }

    &:hover {
      color: var(--light);
      background: var(--dark-100);

      path {
        fill: var(--light);
      }
    }

    &:disabled {
      color: var(--neutral-200);
      background: var(--light);

      path {
        fill: var(--neutral-200);
      }

      &:active {
        background: var(--light);
        box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.25);

        path {
          fill: var(--neutral-200);
        }
      }
    }

    &:active {
      background: var(--neutral-200);
      box-shadow: none;

      path {
        fill: var(--light);
      }
    }

    .icon {
      width: 12px;
      height: 16px;

      &_small {
        width: 6px;
        height: 8px;
      }

      &_left {
        transform: rotate(180deg);
      }
    }
  }

  &_icon {
    padding: 4px 10px;
  }
}
</style>