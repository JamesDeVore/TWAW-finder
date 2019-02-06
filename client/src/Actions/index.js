import { RvSResponse, FinishRvS, ResetRvS, FETCH_RVS_Q } from "./types";


export const fetchRvSQuestions = () => async dispatch => {
  let questions = await fetch('/api/rvsquestions').then(r => r.json());
  dispatch({type:FETCH_RVS_Q, payload:questions})
}


export const ResetAllRvS = () => dispatch => {
  return dispatch({type:ResetRvS, payload:null})
}