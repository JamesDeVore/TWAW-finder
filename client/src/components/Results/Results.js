import React from 'react'

export default function Results(props) {
  console.log(props)
  let{gun} = props
  return (
    <div className="gunResult">
      <div className="gunTitle">
        <h2>{gun.GUN}</h2>
      </div>
      <div className="gunDetails">
        <img src={gun["Image Links"]} className="gunImage" alt=""/>
        <div className="gunStats">
          <ul>
            <li>Manufacturer: {gun.Manufacturer}</li>
            <li>Caliber: {gun.caliber}</li>
            <li>MSRP: ${gun.Price}</li>
            <li>Frame Material: {gun.FrameMaterial}</li>
            <li>Action type: {gun.ActionType}</li>
            <li>Link: <a href="google.com">Link here</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
