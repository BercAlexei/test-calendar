<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <div class="header__btns">
            <Btn text="Добавить" />
            <Btn text="Обновить" />
          </div>

          <div class="header__input">
            <div class="header__input-image"></div>

            <Input placeholder="Search..." :valid="true"/>
          </div>
        </div>
      </div>
    </header>
    <div class="calendar">
      <div class="container">
        <div class="calendar__btns">
          <Btn
            icon
            extra
            :optionIcon="{ direction: 'left', size: 'large' }"
            @click="prevMonth"
          />

          <div class="calendar__date">
            {{ getStringMonths }}
          </div>

          <Btn
            icon
            extra
            :optionIcon="{ direction: 'right', size: 'large' }"
            @click="nextMonth"
          />
          <div class="calendar__btn">
            <Btn extra text="Сегодня" @click="goToday()" />
          </div>
        </div>

        <div class="calendar__wrapper">
          <Cell
            v-for="(day, index) in createCalendar"
            :index="index"
            :key="index"
            :data="day"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/ButtonLayout.vue";
import Input from "@/components/InputLayout.vue";
import Cell from "@/components/CellLayout.vue";

import { mapMutations, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Btn,
    Cell,
    Input,
  },
  computed: {
    ...mapGetters(["getStringMonths", "createCalendar"]),
  },
  methods: {
    ...mapMutations(["nextMonth", "prevMonth", "goToday"]),
  }
};
</script>

<style lang="scss">
.header {
  background: var(--neutral-100);
  padding: 52px 0 21px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__btns {
    .btn {
      &:first-child {
        margin-right: 10px;
      }
    }
  }

  &__input {
    display: flex;
    align-items: center;
    width: 250px;

    &-image {
      background: var(--neutral-200);
      width: 18px;
      height: 18px;
      mask: url("assets/icons/search.svg") 100% /100% no-repeat;
      margin-right: 21px;
    }
  }
}
.calendar {
  padding-top: 12px;
  padding-bottom: 52px;

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border: 0.5px solid var(--dark-200);
  }

  &__btn {
    margin-left: 10px;
    &s {
      margin-bottom: 12px;
      display: flex;
      align-items: center;
    }
  }

  &__date {
    margin: 0 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: var(--dark-200);

    &::first-letter {
      text-transform: uppercase;
    }
  }
}
</style>
