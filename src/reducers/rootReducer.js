import authReducer from "./authReducer"
import taskReducer from "./taskReducer"
import {combineReducers} from "redux"
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth:authReducer,
    task:taskReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
})

export default rootReducer