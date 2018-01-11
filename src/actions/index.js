
export const MENU_TOGGLE_TODO = 'MENU_TOGGLE_TODO'

export const menuToggleTodo = () => ({
  type: MENU_TOGGLE_TODO
})

export const menuToggle = () => {
  return (dispatch) => {
    dispatch(menuToggleTodo())
  }
}

