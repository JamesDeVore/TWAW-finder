import React from 'react'

export default function Results(props) {
  console.log(props)
  let{gun} = props
  return (
    <div>
      {gun.Model}
    </div>
  )
}
