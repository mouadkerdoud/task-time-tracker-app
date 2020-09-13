
const initialState={authErr:null}

const authReducer = (state=initialState, action)=>{
    switch(action.type){

        case "LOGIN_SUCESS":
            console.log("login successfull")
            return {
                ...state,
                authErr:null
            }
        case "LOGIN_FAIL":
            console.log("login failed")
            return {
                ...state,
                authErr:"Check your entries and try again."
            }

        case "LOGOUT_SUCCESS":
            console.log("log out successfull")
            return state

        case "SIGNUP_SUCESS":
            console.log("sign up successfull")
            return state

        case "SIGNUP_FAIL":
            console.log("sign up failed",action.err.message)
            return state
        

        default:
            return state
            
    }
}

export default authReducer