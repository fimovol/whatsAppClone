export default (state = [{numero:0}], action) => {
  switch (action.type) {
  case 'APARECE':
    return [{numero:1}]
  case 'DESAPARECE':
    return [{numero:0}]
  case 'CREARNOTA':
    return state.concat(action.payload)
  default:
    return state
  }
}
