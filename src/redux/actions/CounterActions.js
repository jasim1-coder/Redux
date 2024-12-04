export const increment = () => {
    return {type: 'INCREMENT'};
};

export const decrement = () => {
    return {type: 'DECREMENT'}
};

export const addTodo = ({name}) => {
    return {
    type : 'ADD',
    payload :{name},
    }
}
export const deleteTodo = ({id}) => {
    return {
    type: 'REMOVE',
    payload: {id}
}}

export const addToCart  = (product) => {
    return {
        type : 'ADD_TO_CART',
        payload: product,
    };

};

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id,
    };

};