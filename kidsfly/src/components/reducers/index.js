import {GET_TRIPS_START, GET_TRIPS_SUCCESS, GET_TRIPS_FAIL, ADD_TRIPS_START, ADD_TRIPS_SUCCESS, ADD_TRIPS_FAIL} from '../../actions'

const initialState =
{
  trips: [],
  fetchingTrips: false,
  addingTrip: false,
  error: null
}

export const tripReducer = (state = initialState, action) => {
 switch(action.type) {
   case ADD_TRIPS_START:
     return {
       ...state,
       addingTrip: true
     }
     case ADD_TRIPS_SUCCESS:
       return {
         ...state,
         addingTrip: false,
         trips: action.payload
       }
       case ADD_TRIPS_FAIL:
         return {
           ...state,
           addingTrip: false,
           error: action.payload
         }
         case GET_TRIPS_START:
           return {
             ...state,
             fetchingTrips: true
           }
           case GET_TRIPS_SUCCESS:
             return {
               ...state,
               fetchingTrips: false,
               trips: action.payload
             }
             case GET_TRIPS_FAIL:
               return {
                 ...state,
                 fetchingTrips: false,
                 error: action.payload
               }
               default: return state
 }
}
