import { addProject } from "../../constants";

const initialState={dataSubmit:false}

const CreateProj=(state=initialState,action) =>{

    switch (action.type) {
        case addProject:
            console.log('reducer',action.data)
            return {
                ...state,newProjDatadata:action.data,dataSubmit:true
            }
    
        default:
            return {...state}
    }
}
export default CreateProj;