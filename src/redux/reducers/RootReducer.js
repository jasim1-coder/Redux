import { combineReducers } from "redux";
import { TodoReducerFun } from "./TodoReducer";
import { counterReducer } from "./CounterReducer";
import { CartReducer } from "./AddToCart";

export const rootReducer = combineReducers({
    count: counterReducer,
    todos: TodoReducerFun,
    cart: CartReducer,
});