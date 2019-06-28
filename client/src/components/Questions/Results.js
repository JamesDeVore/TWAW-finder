import React from 'react'

export default function Results(props) {
  console.log(props)
  let{gun} = props
  return (
    <div className="gunResult">
      <div className="gunTitle">
        <h2>Model: {gun.GUN}</h2>
      </div>
      <div className="gunDetails">
        <img src={gun["Image Links"]} className="gunImage" alt=""/>
        <div className="gunStats">
          <ul>
            <li>stat</li>
            <li>stat</li>
            <li>stat</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
