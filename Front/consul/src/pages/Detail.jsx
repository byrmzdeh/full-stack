import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../sass/detail.scss'

const Detail = () => {
    let { id } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/")
            .then((res) => res.json())
            .then((api) => {
                const itemDetail = api.find((x) => x._id === id)
                setProduct(itemDetail)
            })
    }, [id])

    return (
        <div className='detail'>
            <i className={product.icon}></i>
            <div>
                <h2>Name: {product.name}</h2>
                <h3>Description : {product.desc}</h3>
                <p>Price: $ <b>{product.price}</b></p>
            </div>
        </div>
    )
}

export default Detail