import React from 'react'

const GridContent = ({category}) => {
    return (
        <div className="gridcontent">
        <img src={category.image} alt="" />
        <p>{category.name}</p>
    </div>
    )
}

export default GridContent
