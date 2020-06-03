import { combineReducers } from "redux";

const loginUserDataReducer = () => {
    return [
        {
            "username":"test@gmail.com",
            "password" :'test123'
        }
    ]
}


export default combineReducers({
    loginUserData: loginUserDataReducer
})