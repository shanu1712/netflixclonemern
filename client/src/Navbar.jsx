import React from 'react'
import "./Navbar.css"
import SearchIcon from '@material-ui/icons/Search';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='left'>
                <img className="logo" src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"/>
              <span>Homepage</span>
              <span>Series</span>
              
              <span>Movies</span>
              
              <span>New and Popular</span>
              
              <span>My List</span>
            </div>
            
            <div className='right'>
                <SearchIcon className="icon"/>
                <span>Kid</span>
                <NotificationImportantIcon className="icon"/>
                <img className="profile_pic" src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"/>
                <div className='profile'>
                  
                 <ArrowDropDownIcon className="icon"/>
                 <div className='options'>
                 <span>Settings</span>
                 <span>Logout</span>
                 </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar
