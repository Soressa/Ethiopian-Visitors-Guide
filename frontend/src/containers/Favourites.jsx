import React from 'react'
import FavCard from '../components/common/FavCard'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Search from '../components/common/Search'

const Favourites = () => {
    return (
        <>
        <Header/>
    <section class="section2">
        <div class="gallery">
            <Search/>
         </div>
          <div class="heading1">
            Favourites in Ethiopia
         </div>
        <div class="grid">
            <FavCard/>
       </div>  
    </section>
    <Footer/>
        </>
    )
}

export default Favourites
