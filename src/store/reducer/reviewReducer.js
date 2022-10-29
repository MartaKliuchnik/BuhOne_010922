import { review } from '../../components/ReviewsContainer/data';

const defaultState = review;

const DISPLAY_NEXT_REVIEW = 'DISPLAY_NEXT_REVIEW';
const ADD_NEW_REVIEW = 'ADD_NEW_REVIEW';

export const dispayNextReview = (payload) => ({ type: DISPLAY_NEXT_REVIEW, payload });
export const addNewReview = (payload) => ({ type: ADD_NEW_REVIEW, payload });

export const reviewReducer = (state = defaultState, action) => {
    if (action.type === DISPLAY_NEXT_REVIEW) {
        return state.map(el => (el.id === action.payload)
            ? el.display = true
            : el.display = false)
    } else if(action.type === ADD_NEW_REVIEW){
        return [...state,
            {
            ...action.payload,
                id: Date.now(),
                display: true
            }
        ]
    } else {
        return state
    }
}
