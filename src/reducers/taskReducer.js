
const initialState={}

const taskReducer = (state=initialState, action)=>{
    switch(action.type){
        case "TASK_ADDED_SUCESS":
            console.log("task added sucess")
            return state

        case "TASK_ADDED_FAILED":
            console.log("task added failed",action.err)
            return state

        default:
            return state

    }
}

export default taskReducer