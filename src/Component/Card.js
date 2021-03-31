import React from 'react'

const Card = ({cardData}) => {
    // console.log(cardData.id);
    return (
        <div className={"card item" + cardData.id} style={{ borderTop: `5px solid ${cardData.borderColor}` }}>
            <h2>{cardData.title}</h2>
				<p>{cardData.desc}</p>
				<div>
					<img src={cardData.iconSrc} alt="..." className="icon" />
				</div>
        </div>
    )
}

export default Card
