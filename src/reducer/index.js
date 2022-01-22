export default (state = 0, action) => {
  switch (action.type) {
  case 'APARECE':
    return 1
  case 'DESAPARECE':
    return 0
  default:
    return state
  }
}
  