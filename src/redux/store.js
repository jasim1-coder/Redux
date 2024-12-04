import {createStore} from 'redux';
import { rootReducer } from './reducers/RootReducer';
// import { isCompositeComponentWithType } from 'react-dom/test-utils';

const store = createStore(rootReducer);
export default store;