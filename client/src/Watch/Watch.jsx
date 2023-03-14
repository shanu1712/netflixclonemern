import React from 'react'
import "./Watch.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const Watch = () => {
  return (
    <div className='watch'>
      <div className='back'>
         <ArrowBackIcon/>
         Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://youtu.be/O1nDozs-LxI"/>


    </div>
  )
}

export default Watch
