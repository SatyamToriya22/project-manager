import { ProjectList } from "../../constants";

const initialState={isPending:true,isError:null,initial:null}
const DashboardReducer = (state=initialState,action) => {
    switch (action.type) {
        case ProjectList:
            console.log('reducer data',action.data)
                console.log('data taked',action.data);
                return{
                    ...state,projectData:action.data.data,isPending:action.data.isPending,initials:action.initials
                }
    
        default:
            return{
                ...state
            }
    }
}

export default DashboardReducer
