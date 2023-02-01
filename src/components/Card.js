import React from 'react'

const Card = ({name,price,img}) => {
    return (
        <div className='card'>
            <div className="card__img">
                <img src={img} alt="zara" />
            </div>
            <div className="card__info">
                <p className="card__title">
                    { name }
                </p>
                <p className="card__price">
                   { price }
                </p>
            </div>
        </div>
    )
}

export default Card