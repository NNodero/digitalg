import React from 'react'
import nav from './Navbar.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../Assets/Img/logo.png'
function Navbar() {
  return (
    <div className={nav.navbar}>
        <div className={nav.first}>
            <img src={logo} alt=''/>
        </div>
        <div div className={nav.second}>
            <span className={nav.item1}>Our work</span>
           <span className={nav.item2}>Services</span>
           <span className={nav.item3}>About</span>           
           <span className={nav.item4}>Blog</span>
           <span className={nav.item5}>Carerres</span>
           <span className={nav.item6}>Contact</span>
           <div><span className={nav.item7}>|</span></div>
           <div className={nav.searchbox}> <SearchIcon sx={{fontSize:"40px"}}/></div>
    </div>
    </div>
  )
}

export default Navbar