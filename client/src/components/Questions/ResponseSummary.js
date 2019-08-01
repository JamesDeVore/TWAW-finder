import React from "react";

export default function ResponseSummary(props) {
  /*=====================================================
props = {
  questions:[{},{}],
  responses:{}
  handleSubmit:() => {}
}
=====================================================*/
  return (
    <div className="container">
      <div className="row">
        <h1>Finished!</h1>
      </div>
      <div className="row">
        <h2>Here is a summary of your responses:</h2>
      </div>
      <div className="row justify-content-center">
        {Object.keys(props.questions).map((questionObjNum, i) => {
          return (
            <div className="col-md-8 justify-content-center">
              <p>
                {i} - {props.questions[questionObjNum].text}
              </p>
              <p>
                Response:{" "}
                {props.responses[props.questions[questionObjNum]["category"]]}
              </p>
            </div>
          );
        })}
      </div>
      <div className="row">
        <button
          className="btn btn-secondary"
          onClick={() => props.handleSubmit()}
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
}
