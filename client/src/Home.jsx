import React from 'react'
import "./Home.css"
//import {AbcIcon} from '@mui/icons-material/Abc';
import {AcUnit} from "@material-ui/icons"
import Navbar from './Navbar'
import Featured from './featured/Featured'
import Lists from './Lists/Lists'
const Home = () => {
  return (
    <div className='home'>
      
      {/* <AcUnit/> */}
      <Navbar/>
      <img style={{width:"100%",height:"100%"}} src="https://res.cloudinary.com/practicaldev/image/fetch/s--THrf5Yjw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n6brz4p7iq7j1mulo1nv.jpg"/>
     
     <Featured type="series"/>
     <Lists/>
     <Lists/>
     <Lists/>
     <Lists/>
     <Lists/>
     <Lists/>
     <Lists/>
     <Lists/>
     <Lists/>
     <Lists/>
     <Lists/>
     <Lists/>
         </div>
  )
}

export default Home
