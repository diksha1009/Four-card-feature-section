import React from 'react'
import cardData  from '../data'
import Card from './Card'
const Cards = () => {
    return (
        <div className="container">
            {cardData.map((card)=>(
                <Card key={card.id} cardData={card}   />
            ))}
        </div>
    )
}

export default Cards
