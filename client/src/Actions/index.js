import {  FETCH_RVS_Q, RVS_RESPONSE } from "./types";


export const fetchRvSQuestions = () => async dispatch => {
  let questions = await fetch('/api/rvsquestions').then(r => r.json());
  dispatch({type:FETCH_RVS_Q, payload:questions})
}

export const sendRvSResponsesAndRecieveAnswer = (userResponseObj) => async dispatch => {
  //send the response object
  let finalCount = await fetch('/api/selectguntype', {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userResponseObj)
  }).then(r => r.json())
  //dispatch the correct response
  console.log(finalCount)
  if(finalCount.Semi > finalCount.Revolver){
    return dispatch({type:RVS_RESPONSE, payload:"Semi"})
  } else if(finalCount.Revolver > finalCount.Semi){
    return dispatch({ type: RVS_RESPONSE, payload: "Revolver" })
  } else {
    return dispatch({ type: RVS_RESPONSE, payload: "" })
  }
}