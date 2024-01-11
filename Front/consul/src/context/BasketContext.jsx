import { createContext, useState } from "react";

export const BasketContext = createContext()

function BasketProvider({children}) {
    const [basket, setBaket] = useState([])

    function addBasket(item) {
        const index = basket.findIndex((x)=>x.id===item.id)
        if (index===-1) {
            setBaket([...basket, {...item, count:1}]) 
        }
        basket[index].count++   
        setBaket([...basket])
    }

    function increaseCount(item) {
        const index = basket.findIndex((x)=>x.id===item.id)
        basket[index].count++
        setBaket([...basket])

    }

    function decreaseCount(item) {
        const index = basket.findIndex((x)=>x.id===item.id)
        if (basket[index].count>1) {
            basket[index].count--
            setBaket([...basket])  
        } 
        setBaket([...basket])   
    }

    function remove(item) {
        setBaket(basket.filter((x)=>x.id!==item.id))
        
    }

    const data = {addBasket , increaseCount , decreaseCount , remove , basket}

    return (
        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>
    )
    
}
export default BasketProvider