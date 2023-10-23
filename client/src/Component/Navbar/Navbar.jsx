import React, {useEffect, useState } from 'react'
import './Navbar.scss'
import logo from '../../Assets/Img/logo.png'
import DehazeIcon from '@mui/icons-material/Dehaze';
function Navbar() {
  const [isdisplayed, setdisplayed] = useState(false)
  const [smallnav, setsmallnav] = useState(false)
  const [nav, setnav] = useState(true)
  const [classes, setclasses] = useState("")




  const [crr,setcrr] = useState(0);


 
const changenavbar = ()=>{

  const prev= window.scrollY

  if(prev > 50 && prev>crr ){
    setdisplayed(true)
  }
  else if( prev> 50 && prev < crr){
    setdisplayed(false)
    setsmallnav(true)
  }
  else{
    setdisplayed(false)
    setsmallnav(false)
  }

setcrr(window.scrollY)
}
window.addEventListener('scroll', changenavbar);

useEffect(()=>{
  if(nav === true && window.innerWidth<515){
    setclasses("second hide")
  }
  else{
    setclasses("second")
  }
},[nav])



  return (

    <div className ={smallnav ? 'navbar bar' : 'navbar' } style={ isdisplayed ? { transform: `translateY(-170px)`} :  { transform: `translateY(0px)`}}>
        <div className='first'>
            <img src={logo} alt=''/>
        </div>

        <div className={classes}> 
            <span className='item1'>Our work</span>
           <span className='item2'>Services</span>
           <span className='item3'>About</span>           
           <span className='item4'>Blog</span>
           <span className='item5'>Carerres</span>
           <span className='item6'>Contact</span>
           <div><span className='item7'>|</span></div>
           <div className='searchbox'><svg id="Capa_1" enable-background="new 0 0 515.558 515.558" height="24" viewBox="0 0 515.558 515.558" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"></path></svg></div>
        </div>
        <div  className='overlay'></div>

        <div className='icon' style={{cursor:'pointer'}} ><DehazeIcon fontSize='large' onClick={()=>(setnav((prev)=>!prev))}/></div>

    </div>
  )

  
}

export default Navbar