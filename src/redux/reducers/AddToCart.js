export const CartReducer = (state=[],action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            console.log('Adding to cart:', action.payload);

            alert("product added successfully")
            return [...state, action.payload] ;
        case 'REMOVE_FROM_CART':
            alert("product removed successfully")
            return state.filter((product) => product.id !== action.payload)
            default:
                return state
    }
}