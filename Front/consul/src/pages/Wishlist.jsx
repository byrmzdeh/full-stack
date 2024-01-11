import React, { useContext } from 'react'
import { WishlistContext } from '../context/WishlistContext'

const Wishlist = () => {
    const {wishlist} = useContext(WishlistContext)
  return (
    <div>
        {wishlist.map(item=>(
            <p>{item.name}</p>
        ))}
      
    </div>
  )
}

export default Wishlist
