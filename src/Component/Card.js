import React from 'react'

const Card = ({cardData}) => {
    return (
        <section className="card" style={{ borderTop: `3px solid ${cardData.borderColor}` }}>
            <h2>{cardData.title}</h2>
				<p>{cardData.desc}</p>
				<div>
					<img src={cardData.iconSrc} alt="..." className="icon" />
				</div>
        </section>
    )
}

export default Card
