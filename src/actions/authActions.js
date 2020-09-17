import { actionTypes } from 'redux-firestore'


export const signIn = (creds)=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password
        ).then( ()=>{
            dispatch({type:"LOGIN_SUCESS"})
        } ).catch( (err)=>{
            dispatch({type:"LOGIN_FAIL",err})
        } )
    }
}

export const signOut = ()=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase()
        firebase.auth().signOut()
        .then(()=>{
            dispatch({ type: actionTypes.CLEAR_DATA })
        })
        .catch(err=>{
            dispatch({type:"LOGOUT_FAIL",err})
        })
    }
}

export const signUp = (newUser) =>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then( resp=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName:newUser.firstName,
                lastName:newUser.lastName,
                initials:newUser.firstName[0]+newUser.lastName[1]
            })
        })
        .then(()=>{
            dispatch({type:"SIGNUP_SUCESS"})
        })
        .catch(err=>{
            dispatch({type:"SIGNUP_FAIL",err})
        })
    }
}