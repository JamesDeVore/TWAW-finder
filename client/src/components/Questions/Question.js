import React from 'react'
import { useState, useEffect, useRef } from "react";
import SelectButtons from './answerTypes/Select'

//given a question object, just render the question
export default function Question(props) {
  let {question:{text,answers,category,type},number} = props
  console.log(type)
  setTimeout(() => {
    document.querySelector(".questionBox-before").classList.add("questionBox-active");
    console.log("class added")
  
  },100)
  
  const allAnswers = () => {
    if(type === "select"){
      return (
        <SelectButtons question={props.question} answer={props.answer} />
      );
    } else {
      return(answers.map(answer => (
        <button
          className="btn btn-start responseBtn"
          onClick={() => {
            document
              .querySelector(".questionBox-before")
              .classList.remove("questionBox-active");
            props.answer(answer.value, category);
          }}>
          {answer.text}
        </button>
        
      )));
    }
  }

  return (
    <div className="row justify-content-center questionBox-before">
      <div className="col-md-10 questionText">
        <h2>Question #{number + 1}</h2>
      <h1>{text}</h1>
      </div>
      <div className="col-md-8 answersDiv">
      {allAnswers()}
      </div>
    </div>
  )
}
