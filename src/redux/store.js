import {createStore,combineReducers} from 'redux';
import cartreducer from './Reducer/reducer';

const rootReducers = combineReducers({
    cart: cartreducer
});


    const store=createStore(rootReducers);

export default store;