import React from 'react'

export default function Buttons(props) {
  let {answer,category} = props
  return (    
    answers.map(answer => {
      <button
        className="btn btn-start responseBtn"
        onClick={() => {
          document
            .querySelector(".questionBox-before")
            .classList.remove("questionBox-active");
          props.answer(answer.value, category);
        }}
      >
        {answer.text}
      </button>;
    })
  )
}
