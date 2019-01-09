import React from 'react'


const getSeason = (lat, month) => {
  if(month > 2 && month < 9) {
     return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ?  'winter' : 'summer'
  }
}

const Season = (props) => {
 const season = getSeason(props.lat, new Date().getMonth()) 
  
  return (
<div>{season === 'winter' ? 'burrr its winter': "Lets hit the beach"}</div>
  )
}

export default Season