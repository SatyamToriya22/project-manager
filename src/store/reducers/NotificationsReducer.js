import { Notifications } from "../../constants"

const initialState={}
const NotificationsReducer = (state=initialState,action) => {
    switch(action.type){
        case Notifications:
            return{...state,isPending:false,notificationsData:action.data}

        default:
            return{ ...state }
    }    
}

export default NotificationsReducer
