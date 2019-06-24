import React from 'react'

//given a question object, just render the question
export default function Question(props) {
  let {question:{text,answers,category}} = props
  console.log(answers)
  return (
    <div className="row justify-content-center">
      <div className="col-md-10">
      <h1>{text}</h1>
      </div>
      <div className="col-md-10">
      {answers.map(answer => (
      <button 
        className="btn btn-start"
        onClick={() =>props.answer(answer.value,category) }
        >{answer.text}</button>
      ))}
      </div>
    </div>
  )
}
