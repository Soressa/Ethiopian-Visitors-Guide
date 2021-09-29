import React from 'react'
import Imglike from '../../assets/img/Like_button.svg'

const Card = ({place}) => {
    return (
        <>
           <div class="gridcontent">
                
                <div class="image">
                   <img class="mainimage" src="images/Ziway-hippo.png" alt="" />
                   <div class="like">
                      <img src={Imglike} alt="" />
                </div>
                  </div>
                   <div class="textcontent">
                 <div class="gridheading">
                      <h1>{place.name}</h1>
                </div>
                <div class="gridsubheading"> 
                    <h2>Private and Luxury</h2>
                </div>
                  <div class="gridtext">
                      <p>
                          Do you like to see different kind of birds in one place? Lake Ziway is good choice.
                         Lake Ziway is 160km south of Addis Ababa and is the nearest Riftvalley Lake of
                         Ethiopia, to Addis Ababa.Can be visited in day tour from Addis.It is
                         the largest of the Northern Rift Valley Lakes with surface Area of over 440 square kilometers.
                     </p>
                 </div>
                  <div class="input-button">
                     <input type="submit" value="Direction" /> 
                  </div>
              </div>
              </div>  
        </>
    )
}

export default Card
