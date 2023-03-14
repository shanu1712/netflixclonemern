import React from 'react'
import { useState } from 'react';
import "./ListItem.css"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
const ListItem = (index) => {
  const [isHovered, setIsHovered] = useState(false);

  const trailer= "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
  return (
    <div className='ListItem ' style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
>
      <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"/>
        
        {isHovered && (
        <>
        <video src={trailer} autoplay={true} loop/>
        <div className='itemInfo'>
          <div className='icons'>
             <PlayArrowIcon/>
              <AddOutlinedIcon/>
             <ThumbUpOutlinedIcon/>
             <ThumbDownOutlinedIcon/>
          </div>
          <div className='itemInfoTop'>
            <span>1Hour 14mins</span>
            <span className='limit'>+16</span>
            <span>1999</span>
          </div>
          <div className='desc1'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </div>
        </div>
        </>
)}
            
    </div>
    
  )
}

export default ListItem
