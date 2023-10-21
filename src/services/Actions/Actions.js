import { ADD_TO_CART } from "../constants"

export const AddToCart = (data) => {
    // console.log('acton' , data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}