import React from 'react'

const Search = ({img}) => {
    return (
        <form action="" className="searchbox">
        <input type="inputbox" placeholder="Search for best places to Visit in Ethiopia" />
        <img className="searchicon" src={img} alt="" />
     </form>
    )
}

export default Search
