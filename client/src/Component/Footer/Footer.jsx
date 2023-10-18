import React from 'react'
import ftr from './Footer.module.scss'
import lg from '../../Assets/Img/logo.png'

function Footer() {
  return (
    <div className={ftr.footer}>
        <div className={ftr.box1}>
            <div className={ftr.imgbxox}>
                <img src={lg}alt=''/>

            </div>

        </div>
        <div className={ftr.box2}>
            <div className={ftr.nav}>
                    <h3>Our work</h3>
                    <h3>Services</h3>
                    <h3>About</h3>
                    <h3>Blogk</h3>
                    <h3>Carrers</h3>
                    <h3>Contact</h3>
            </div>

            <div  className={ftr.address}>

              <div className={ftr.sydney}>
                 <h3>Sydeny agency</h3>
                 <span>604/6A Glen Street,
                    Milsons Point NSW 2061</span>
                  <span>02 9357 6265</span>
              </div>
              <div className={ftr.melbourne}>
                <h3>Melbourne agency</h3>
                 <span>86 Clendon Rd,
                    Toorak VIC 3142</span>
                  <div className={ftr.contact}>
                    <span>1300 270 751</span>
                    <span>info@digitalgarden.com.au</span>
                    <span>careers@digitalgarden.com.au</span>
                  </div>
              </div>
            </div>
            <div  className={ftr.scl}>
                <h3>Follow us</h3>
                <div>
                    <img src='' alt=''/>
                    <img src='' alt=''/>
                    <img src='' alt=''/>

                </div>
                <span>Privacy Policy</span>
                <span>Tems & Condition</span>

            </div>

        </div>

    </div>
  )
}

export default Footer