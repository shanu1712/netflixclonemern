import React from 'react'
import { useState,useRef } from 'react';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import "./Lists.css"
import ListItem from '../ListItem/ListItem';
const Lists = () => {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
  
    const listRef = useRef();

    const handleclick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
          setSlideNumber(slideNumber - 1);
          listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 5) {
          setSlideNumber(slideNumber + 1);
          listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
      };
  return (
    <div className='list'>
    <span className='lisTitle'>Continue To Watch</span>
    <div className='wrapper'>
        <ArrowBackIosOutlinedIcon className='sliderArrowleft' onClick={()=>handleclick("left")} style={{ display: !isMoved && "none" }}
/>
        <div className='container'>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            
        </div>
        <ArrowForwardIosOutlinedIcon className='sliderArrowright' onClick={()=>handleclick("right")}/>
    </div>
    </div>
  )
}

export default Lists
