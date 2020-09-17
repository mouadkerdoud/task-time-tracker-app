export const addTask = (task)=>{
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


export const deleteTask = (taskId)=>{
    return (dispatch,getState,{getFirestore})=>{
        const firestore = getFirestore()
        firestore.collection("tasks").doc(taskId).delete()
        .then(()=>{
            dispatch({type:"DELETE_SUCESS"})
        })
        .catch(err=>{
            dispatch({type:"DELETE_FAILED",err})
        })
    }
}

