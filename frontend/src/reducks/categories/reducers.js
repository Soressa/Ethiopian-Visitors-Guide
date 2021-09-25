import * as Actions from './actions'
import  initialState from '../store/initialState'

export const CategoriesReducer = (state = initialState.categories, action) => {
    switch(action.type) {
        
        case Actions.FETCH_CATEGORY:
            return {
                ...state,
                list: action.payload
            }
       
        default:
            return state
    }
}