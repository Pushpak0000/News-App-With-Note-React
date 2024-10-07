import React, { useContext } from 'react'
import { NewsAppContext } from '../store/news-app-store'
const WelcomeMessage = () => {
  const {handleApiCall} =  useContext(NewsAppContext);

  return (
    <>
     <h1>There are no news</h1> 
     <button onClick={handleApiCall} type="button" className="btn btn-primary">Get News</button>
   </>
  )
}

export default WelcomeMessage
