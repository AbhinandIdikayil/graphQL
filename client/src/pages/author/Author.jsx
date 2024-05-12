import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Author() {
  const { state } = useLocation()
  useEffect(() => {
    console.log(state)
  },[])
  return (
    <div>
      <h2>name : {state?.author?.author_name}</h2>
      <h2> country : {state?.author?.author_country}</h2>
      <h2>age : {state?.author?.author_age}</h2>
      <h2>total books : {state?.author?.total_published_works}</h2>
      <img src={state?.author?.photo} alt="" />
    </div>
  )
}

export default Author