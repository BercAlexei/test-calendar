import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
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
        date: new Date(2022, 6, 31).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' }),
        dateShort: new Date(2022, 6, 31).toLocaleDateString('ru-RU', { day: 'numeric', weekday: 'long' }),
        title: "Закончить проект",
        people: "Я",
        description: ""
      },
      {
        id: 2,
        date: new Date(2022, 7, 7).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' }),
        dateShort: new Date(2022, 7, 7).toLocaleDateString('ru-RU', { day: 'numeric', weekday: 'long' }),
        title: "Закончить проект",
        people: "Я",
        description: "Заакончить методы добавлени и удаления"
      },
      {
        id: 3,
        date: new Date(2022, 6, 15).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' }),
        dateShort: new Date(2022, 6, 15).toLocaleDateString('ru-RU', { day: 'numeric', weekday: 'long' }),
        title: "Закончить проект",
        people: "Я",
        description: ""
      },
      {
        id: 4,
        date: new Date(2022, 6, 1).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' }),
        dateShort: new Date(2022, 6, 1).toLocaleDateString('ru-RU', { day: 'numeric', weekday: 'long' }),
        title: "Закончить проект",
        people: "Я",
        description: "Устал уже"
      },
      {
        id: 5,
        date: new Date(2021, 11, 31).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' }),
        dateShort: new Date(2022, 11, 31).toLocaleDateString('ru-RU', { day: 'numeric', weekday: 'long' }),
        title: "Встретить новый год!",
        people: "Я, Саня, Серега, Люда",
        description: "Счастливого нового года!!!"
      }
    ],
    showPopup: '',
    newDevelop: {
      date: "",
      title: "",
      people: "",
      description: ""
    },
    scrollWidth: false,
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
      //запись дней текущего месяца
      for (let i = 1; i <= lastDateOfMonth; i++) {
        // создание id для массива
        let id = new Date(state.date.currYear, state.date.currMonth, i).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
        let develop = state.developments.filter(item => item.date === id)[0]

        days.push({
          id: id,
          date: {
            year: state.date.currYear,
            month: state.date.currMonth,
            day: i,
          },
          dayString: new Date(state.date.currYear, state.date.currMonth, i).toLocaleDateString('ru-RU', { weekday: 'long' }),
          develop: {
            date: '',
            title: "",
            people: "",
            description: "",
            ...develop
          }
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
          let id = new Date(year, month, lastWeekOfPrevMonth).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });

          // фильтрация массива событий
          let develop = state.developments.filter(item => item.date === id)[0]

          days.unshift({
            id: id,
            date: {
              year: year,
              month: month,
              day: lastWeekOfPrevMonth,
            },
            dayString: new Date(year, month, lastWeekOfPrevMonth).toLocaleDateString('ru-RU', { weekday: 'long' }),
            develop: {
              date: '',
              title: "",
              people: "",
              description: "",
              ...develop
            }
          })
        }
      }

      //запись дней следующего месяца
      if (lastDayOfMonth != 0) {

        let firstWeekOfNextMonth = 7 - lastDayOfMonth;

        for (let i = 1; i <= firstWeekOfNextMonth; i++) {
          let year = state.date.currMonth == 11 ? new Date(state.date.currYear + 1, 1, 0).getFullYear() : state.date.currYear;
          let month = i ? new Date(state.date.currYear, state.date.currMonth + 1, 1).getMonth() : state.date.currMonth;

          let id = new Date(year, month, i).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
          let develop = state.developments.filter(item => item.date === id)[0]

          days.push({
            id: id,
            date: {
              year: year,
              month: month,
              day: i,
            },
            dayString: new Date(year, month, i).toLocaleDateString('ru-RU', { weekday: 'long' }),
            develop: {
              date: '',
              title: "",
              people: "",
              description: "",
              ...develop
            }
          })
        }
      }

      return days;
    }
  },


  mutations: {
    updateInput(state, event) {
      getProp(state[event.state])

      function getProp(obj) {
        for (let key in obj) {
          if (typeof (obj[key]) === 'object') {
            getProp(obj[key])
          } else if (key == event.target.name) {
            obj[key] = event.target.value
          }
        }
      }
    },

    clearInput(state, event) {
      getProp(state[event.state])

      function getProp(obj) {
        for (let key in obj) {
          if (typeof (obj[key]) === 'object') {
            getProp(obj[key])
          } else if (key == event.name) {
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
      state.showPopup = new Date(state.date.currYear, state.date.currMonth, state.date.currDay).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
    },

    updateShowPopup(state, event) {
      if(event !== state.showPopup) {
        state.scrollWidth = false;
      }
      state.newDevelop.title = '';
      state.newDevelop.people = '';
      state.newDevelop.description = '';
      state.newDevelop.date = event
      state.showPopup = event || ''
    },

    updateScrollWidth(state) {
      if (
        document.documentElement.offsetWidth <
        document.documentElement.scrollWidth
      ) {
        state.scrollWidth = true;
      }
    },

    addDevelop(state, { year, month, day }) {
      console.log(state.newDevelop, year, month, day)
      state.developments.push({
        id: state.developments.length + 1,
        date: new Date(year, month, day).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' }),
        dateShort: new Date(year, month, day).toLocaleDateString('ru-RU', { day: 'numeric', weekday: 'long' }),
        title: state.newDevelop.title,
        people: state.newDevelop.people,
        description: state.newDevelop.description
      })
      state.newDevelop.title = '';
      state.newDevelop.people = '';
      state.newDevelop.description = '';
    },
    delDevelop(state, event) {
      if (event) {
        state.developments = state.developments.filter(item => item.date !== event)
      } else {
        state.newDevelop.title = '';
        state.newDevelop.people = '';
        state.newDevelop.description = '';
      }
    }
  }
})
