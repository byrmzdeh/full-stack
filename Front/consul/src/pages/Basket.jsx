import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext'

const Basket = () => {
    const { basket , decreaseCount , increaseCount , remove} = useContext(BasketContext)
    return (
        <div>
            {basket.map(item => (
                <div className="card" >
                    <i className={item.icon}></i>
                    <h2>{item.name}</h2>
                    <p>{item.price*item.count}</p>

                    <div>
                        <button onClick={()=>decreaseCount(item)}>-</button>
                        <h2>{item.count}</h2>
                        <button  onClick={()=>increaseCount(item)}>+</button>
                    </div>
                    <button onClick={()=>remove(item)}>X</button>
                </div>
            ))}

        </div>
    )
}

export default Basket
