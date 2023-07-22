import { LoginFailed, LoginSuccess, LogOutFailed, LogOutSuccessfull, SignUpSuccess ,SignUpError} from "../../constants"

const initialState={Login:null,Logout:null}
const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case LoginSuccess:
            return{
                ...state,Login:'Success',Logout:null
            }
        case LoginFailed:
            return{
                ...state,Login:'Failed',Logout:null,err:action.err
            }
        case LogOutSuccessfull:
            return{
                ...state,Logout:'Success',Login:null
            }
        case LogOutFailed:
            return{
                ...state,Logout:'Failed',Login:null
            }
        case SignUpSuccess:
            return{
                ...state
            }
        case SignUpError:
            return{
                ...state,
                err:action.err
            }
        default:
            return{
                ...state
            }
    }
}
export default authReducer;