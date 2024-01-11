import { createContext, useState } from "react";

export const WishlistContext = createContext()

function WishlistProvider({children}) {
    const [wishlist,setWishlist] = useState([])

    function toggleWishlist(item) {
        const index = wishlist.findIndex((x)=>x.id===item.id)
        if (index===-1) {
            setWishlist([...wishlist, item]) 
        }else{
            setWishlist(wishlist.filter((x)=>x.id!==item.id))
        }  
    }



    const data = {toggleWishlist , wishlist}

    return(
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )
    
}

export default WishlistProvider