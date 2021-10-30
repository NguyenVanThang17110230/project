import reduxCrud from 'redux-crud'

// types name
const NAME = 'global'
export const reducer = reduxCrud.Map.reducersFor(NAME)
export const actionTypes = reduxCrud.actionTypesFor(NAME)
const actionCreators = reduxCrud.actionCreatorsFor(NAME)

export default actionCreators
