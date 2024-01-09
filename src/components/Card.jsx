import React from 'react'

const Card = ({ src, title, description, price }) => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-[180px] mt-3 h-[170px]' src={src} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p>{description.slice(0 , 40)}..</p>
                    <p className='font-bold'>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card