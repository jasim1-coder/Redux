const initialState = [];
export const TodoReducerFun = (state = initialState, action) => {
        switch (action.type) {
            case 'ADD':
                return [...state, {id: Date.now(), name:action.payload.name}];
            case 'REMOVE':
                return state.filter((tasks) => tasks.id !== action.payload.id)
            default:
                return state
        }
 };

