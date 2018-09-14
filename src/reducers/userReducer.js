const defaultState = {
  openData: 'default value',
  protectedData: {
    email: 'none',
  },
}

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case 'OPEN_REQUEST':
      return { ...state, openData: action.payload }
    case 'PROTECTED_REQUEST':
      return { ...state, protectedData: action.payload }
    default:
      return state
  }
}
