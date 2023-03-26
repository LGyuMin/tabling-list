import { createStore } from "redux";

const initialState = {
    bookingList: [],
    selectedBooking: {}
};

// action types
const FETCH_LIST = 'FETCH_LIST',
    CHANGE_BOOKING_STATE = 'CHANGE_BOOKING_STATE',
    SELECT_BOOKING = 'SELECT_BOOKING';

// action creation funcions
export const fetchList = (list) => ({type: FETCH_LIST, list}),
    changeBookingState = (change) => ({type: CHANGE_BOOKING_STATE, change}),
    selectBooking = (booking) => ({type: SELECT_BOOKING, booking});

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_LIST":
            return {
                ...state,
                bookingList: action,
            }
        case "CHANGE_BOOKING_STATE":
            return {
                ...state,
                bookingList: state.bookingList.map(item => {
                    if(item.id == action.payload.id) {
                        item.status = action.payload.status
                    }
                    return item;
                })
            }
        case "SELECT_BOOKING":
            return {
                ...state,
                selectedBooking: action,
            }
        default:
            return state
    }
}

const store = createStore(reducer);

export default store;