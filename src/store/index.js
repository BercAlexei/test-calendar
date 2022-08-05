import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    date: {
      // текущий день месяца(число)
      currDay: new Date().getDate(),
      // текущий месяц
      currMonth: new Date().getMonth(),
      // текущий год
      currYear: new Date().getFullYear()
    },
    developments: [
      {
        id: 1,
        date: new Date(2022, 6, 31).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }),
        title: "Закончить проект",
        members: "Я",
        description: "Устал уже"
      },
      {
        id: 2,
        date: new Date(2022, 7, 7).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }),
        title: "Закончить проект",
        members: "Я",
        description: "Устал уже"
      },
      {
        id: 3,
        date: new Date(2022, 6, 15).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }),
        title: "Закончить проект",
        members: "Я",
        description: "Устал уже"
      },
      {
        id: 4,
        date: new Date(2022, 6, 1).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }),
        title: "Закончить проект",
        members: "Я",
        description: "Устал уже"
      },
      {
        id: 5,
        date: new Date(2021, 11, 31).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }),
        title: "Встретить новый год!",
        members: "Я, Саня, Серега, Люда",
        description: "Счастливого нового года!!!"
      }
    ],
    showPopup: ''
  },


  getters: {
    getStringMonths(state) {
      let currMonth = new Date(state.date.currYear, state.date.currMonth, state.date.currDay).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long' });
      return currMonth.substring(0, currMonth.length - 3);
    },



    createCalendar(state) {
      let days = [];
      //день недели первого числа текущего месяца
      let firstDayOfMonth = new Date(state.date.currYear, state.date.currMonth, 1).getDay();
      //последняя дата текущего месяца
      let lastDateOfMonth = new Date(state.date.currYear, state.date.currMonth + 1, 0).getDate()
      // день недели последнего числа текущего месяца
      let lastDayOfMonth = new Date(state.date.currYear, state.date.currMonth, lastDateOfMonth).getDay()
      /**
       * ! еще подумать
       */
      //запись дней текущего месяца
      for (let i = 1; i <= lastDateOfMonth; i++) {
        // создание id для массива
        let id = new Date(state.date.currYear, state.date.currMonth, i).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
        let develop = state.developments.filter(item => item.date === id)[0]

        days.push({
          id: id,
          date: {
            year: state.date.currYear,
            month: state.date.currMonth,
            day: i,
          },
          dayString: new Date(state.date.currYear, state.date.currMonth, i).toLocaleDateString('ru-RU', { weekday: 'long' }),
          develop: develop || null
        });
      }

      //запись дней предыдущего месяца
      if (firstDayOfMonth != 1) {

        // последнее число предыдущего месяца
        let lastDateOfPrevMonth;

        if (state.date.currMonth == 0) {
          lastDateOfPrevMonth = new Date(state.date.currYear - 1, 12, 0).getDate()
        } else {
          lastDateOfPrevMonth = new Date(state.date.currYear, state.date.currMonth, 0).getDate();
        }

        for (let i = 1; i < firstDayOfMonth; i++) {
          // вычисление последних дней предыдущего месяца
          let lastWeekOfPrevMonth = lastDateOfPrevMonth - i + 1;
          // вычисление предыдущего месяца и года
          let year = state.date.currMonth == 0 ? new Date(state.date.currYear - 1, 12, 0).getFullYear() : state.date.currYear;
          let month = lastWeekOfPrevMonth ? new Date(state.date.currYear, state.date.currMonth, 0).getMonth() : state.date.currMonth;
          // создание id для массива
          let id = new Date(year, month, lastWeekOfPrevMonth).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });

          // фильтрация массива событий
          let develop = state.developments.filter(item => item.date === id)[0]

          days.unshift({
            id: id,
            date: {
              year: state.date.currYear,
              month: state.date.currMonth,
              day: i,
            },
            dayString: new Date(year, month, lastWeekOfPrevMonth).toLocaleDateString('ru-RU', { weekday: 'long' }),
            develop: develop || null
          })
        }
      }

      //запись дней следующего месяца
      if (lastDayOfMonth != 0) {

        let firstWeekOfNextMonth = 7 - lastDayOfMonth;

        for (let i = 1; i <= firstWeekOfNextMonth; i++) {
          let year = state.date.currMonth == 11 ? new Date(state.date.currYear + 1, 1, 0).getFullYear() : state.date.currYear;
          let month = i ? new Date(state.date.currYear, state.date.currMonth + 1, 1).getMonth() : state.date.currMonth;

          let id = new Date(year, month, i).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
          let develop = state.developments.filter(item => item.date === id)[0]

          days.push({
            id: id,
            date: {
              year: state.date.currYear,
              month: state.date.currMonth,
              day: i,
            },
            dayString: new Date(year, month, i).toLocaleDateString('ru-RU', { weekday: 'long' }),
            develop: develop || null
          })
        }
      }

      console.log(days)
      return days;
    }
  },


  mutations: {
    updateInput(state, event) {
      getProp(state)

      function getProp(obj) {
        for (let key in obj) {
          if (typeof (obj[key]) === 'object') {
            getProp(obj[key])
          } else if (key == event.name) {
            obj[key] = event.value
          }
        }
      }
    },

    clearInput(state, name) {
      getProp(state)

      function getProp(obj) {
        for (let key in obj) {
          if (typeof (obj[key]) === 'object') {
            getProp(obj[key])
          } else if (key == name) {
            obj[key] = ''
          }
        }
      }
    },

    nextMonth(state) {
      state.showPopup = '';
      if (state.date.currMonth == 11) {
        state.date.currMonth = 0;
        state.date.currYear = state.date.currYear + 1;
      } else {
        state.date.currMonth = state.date.currMonth + 1;
      }
    },

    prevMonth(state) {
      state.showPopup = '';
      if (state.date.currMonth == 0) {
        state.date.currMonth = 11;
        state.date.currYear = state.date.currYear - 1;
      } else {
        state.date.currMonth = state.date.currMonth - 1;
      }
    },

    goToday(state) {
      state.date.currYear = new Date().getFullYear();
      state.date.currMonth = new Date().getMonth();
      state.showPopup = new Date(state.date.currYear, state.date.currMonth, state.date.currDay).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
    },

    updateShowPopup(state, event) {
      state.showPopup = event || ''
    },

    // getDevelop(state, event) {
    //   state.developments.filter(item => {
    //     if(item.id === event) {
    //       console.log(item)
    //     }
    //   })
    // },
  }
})
