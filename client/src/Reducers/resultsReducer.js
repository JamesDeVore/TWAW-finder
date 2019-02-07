import {RVS_RESPONSE} from '../Actions/types'

let initialState = {
  RvS:null,
  selectedGuns:[],
}

export const resultsReducer = (state = {}, action) => {
  let {type, payload} = action
  switch (type) {
    case RVS_RESPONSE:
    let responseObj = {
      RvS:payload
    }
      return {...state, ...responseObj}
    default:
      return state
  }
}