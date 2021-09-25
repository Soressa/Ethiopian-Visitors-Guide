import React from 'react'
import ImgLogo from '../../assets/img/EVGA-logo.png'
import ImgMenuicon from '../../assets/img/menuicon.png'

const Header = () => {
    return (
        <header>
        <nav class="navbar">
            <div class="logo">
               <img src={ImgLogo} alt="" />
               <div class="logotext">
                  Ethiopian Visitors <br/>
                  GuideApp
               </div>
            </div>
            <div class="menus">
              Favourites
              <img src={ImgMenuicon} alt="" />
            </div>
        </nav>
    </header>
    )
}

export default Header
