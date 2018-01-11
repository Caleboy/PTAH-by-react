const menuTodos = (state = {switched: true}, action) => {
  switch (action.type) {
    case 'MENU_TOGGLE_TODO':
      return Object.assign({},...state,{switched: !state.switched})
    default:
      return state
  }
}

export default menuTodos
