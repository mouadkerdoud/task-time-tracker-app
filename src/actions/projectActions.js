const addTask = (task)=>{
    return (dispatch,getState,{getFirestore,getFirebase})=>{
        const firestore = getFirestore()
        const authUid= getState().firebase.auth.uid
        const firstName=getState().firebase.profile.firstName
        const lastName=getState().firebase.profile.lastName

        firestore.collection("tasks").add({
            ...task,
            firstName,
            lastName,
            userId:authUid,
            createdAt: new Date()

        })
        .then(()=>{
            dispatch({type:"TASK_ADDED_SUCESS"})
        })
        .catch(err=>{
            dispatch({type:"TASK_ADDED_FAILED",err})
        })

    }
}

export default addTask