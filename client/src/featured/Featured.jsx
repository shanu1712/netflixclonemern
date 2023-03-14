import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import "./Featured.css"
const Featured = ({type}) => {
  return (
    <div className='featured'>
      {/* <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"/> */}
    
    {type && (<div className='category'>
        <span>{type==="movie" ? "Movies" : "TvSeries"}</span>
        <select name="genre" id="genre">
            <option value="">Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          
        </select>
    </div>)}
       <div className='info'>
<img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1%22000000"/>
      <span className='desc'>
        Lorem vbbbbbbbbbbbbbbskdjfhksdjfs sdkjfksdjfsdjffffffffffffffffffffffffssssssssssssssssssssssssssssssssssss
        sdfbsdbbbbbbbbccccccccccccccccccccccccccc vvvvvjhdfbffffffffffffffffffffffffffffffffffffsssssssssssssssssss
        sdbfffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddssssssssssssssssssssssssssssssssssssssss
      </span>
      <div className='buttons'>
        <button className='play'>
        <PlayArrowIcon/>
          <span>Play</span>
        </button>
  
        <button className='more'>
            <InfoOutlinedIcon/>
            <span>Info</span>
        </button>
      </div>
       </div>
    </div>
  )
}

export default Featured
