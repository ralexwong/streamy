import _ from 'lodash';
import {
    FETCH_STREAMS,
    FETCH_STREAM,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';



export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_STREAMS:
            // _mapKeys takes an object and creates an array of objects
            // that have the key value of 'id'
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}