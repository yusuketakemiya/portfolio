// export const STORAGE_KEY = 'todos-vuejs'

// // for testing
// if (navigator.userAgent.indexOf('PhantomJS') > -1) {
//   window.localStorage.clear()
// }

export default {
  openMenueItem (state, id) {
    state.openMenueItem.id = id
  },
  skillSelect (state, skill) {
    state.selectSkill = skill
  }
  // removeTodo (state, todo) {
  //   state.todos.splice(state.todos.indexOf(todo), 1)
  // },
  // editTodo (state, { todo, text = todo.text, done = todo.done }) {
  //   todo.text = text
  //   todo.done = done
  // }
}
