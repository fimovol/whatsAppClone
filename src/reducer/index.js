export default (state = [], action) => {
  switch (action.type) {
  case 'CREARNOTA':
    return state.concat(action.payload)
  default:
    return state
  }
}
