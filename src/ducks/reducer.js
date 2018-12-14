//INITIAL STATE OBJECT
const INITIAL_STATE = {
     name: "",
     address: "",
     city: "",
     state: "",
     zipcode: "",
     imageUrl: "",
     mortgage: "",
     rent: ""
}

//REDUCER
function reducer(state = INITIAL_STATE, action) {

     switch(action.type) {

          case UPDATE_STEP_ONE:
               return Object.assign( {}, state, {
                    name: action.payload.name,
                    address: action.payload.address,
                    city: action.payload.city,
                    state: action.payload.state,
                    zipcode: action.payload.zipcode
               });
          
          case UPDATE_STEP_TWO: 
               return Object.assign( {}, state, {imageUrl: action.payload.imageUrl} );
               
          case UPDATE_STEP_THREE: 
               return Object.assign( {}, state, {
                    mortgage: action.payload.mortgage,
                    rent: action.payload.rent
               });

          default: return state;
     
     }

}

//ACTION TYPES
const UPDATE_STEP_ONE = "UPDATE_STEP_ONE";
const UPDATE_STEP_TWO = "UPDATE_STEP_TWO";
const UPDATE_STEP_THREE = "UPDATE_STEP_THREE";

//ACTION CREATORS
export function updateStepOne(name, address, city, state, zipcode) {
     return {
          type: UPDATE_STEP_ONE,
          payload: { name, address, city, state, zipcode }
     }
}

export function updateStepTwo(imageUrl) {
     return {
          type: UPDATE_STEP_TWO,
          payload: { imageUrl }
     }
}

export function updateStepThree(mortgage, rent) {
     return {
          type: UPDATE_STEP_THREE,
          payload: { mortgage, rent }
     }
}

export default reducer;