import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Search from '../components/common/Search'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import Card from '../components/common/Card';
import { fetchPlaces } from '../reducks/places/operations';
import { getPlaces } from '../reducks/places/selectors';

const Places = () => {
    const parsed = queryString.parse(window.location.search);
  const [search, setSearch] = useState(null);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const places = getPlaces(selector);
  console.log(places);
  useEffect(() => {

    if (parsed.search != undefined) {
      setSearch(parsed.search);
    }
  }, []);

  useEffect(() => {
    if (search != null ) {
      dispatch(fetchPlaces(search));
    }
  }, [search]);

    return (
       <>
    <Header/> 
    <section class="section2">
        <div class="gallery">
           <Search/>
         </div>
          <div class="heading1">
             Day Trips in Ethiopia
         </div>
        <div class="grid">
            {places.map((place)=>(
                <Card place={place}/>
            ))}
       </div>  
    </section>
    <Footer/>   
       </>
    )
}

export default Places
