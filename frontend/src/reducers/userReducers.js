 export const userLoginReducer = (state = { }, action) => {
    
     switch (action.type) {
         case USESR_LOGIN_REQUEST:
             return { loading: true}
         case USER_LOGIN_SUCCESS:
             return { loading: false, userInfo: action.payload }
         case USER_LOGIN_FAIL:
             return { loading: false, errors: action.payload }
         case USER_LOGOUT:
             return { }    
         default: return state
     }

 }   