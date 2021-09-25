import React from 'react'
import ImgLike from "../../assets/img/Like_button.svg"

const Thumbnail = ({place}) => {
    return (
        <div class="thumbnail">
        <div class="like">
           <img src={ImgLike} alt="" />
        </div>
        <img src={place.image} alt="" />
        <p class="thumbheading">{place.name}</p>
        <p class="thumbtext">
           {place.description}
        </p>
    </div>     
    )
}

export default Thumbnail
