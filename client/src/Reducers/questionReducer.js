import { FETCH_RVS_Q} from '../Actions/types'


export const questionReducer = (state = [], action) => {
  let {type, payload} = action
  switch (type) {
    case FETCH_RVS_Q:
      return [...state,...payload]
    default:
      return state
  }
}