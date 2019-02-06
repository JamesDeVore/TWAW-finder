import {RvSResponse, ResetRvS} from '../Actions/types'

const initialState = {
  Preference:null,
  RecoilSensitive:null,
  WillingToClean:null,
  FingerStrengthForDbl:null,
  FiveRoundCapacity:null,
  CarryInPurse:null,
  SelectedType:null,
}
export const RvSAReducer = (state = initialState, action) => {
  let {payload, type} =  action
  switch (type) {
    case RvSResponse:
      return {...state,...payload}
    case ResetRvS:
      return {...state,...initialState}
    default:
      return state
  }
}