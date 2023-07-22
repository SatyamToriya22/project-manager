import { ErrorOccured } from "../../constants"

const initialState = { isError:false }
const ErrorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ErrorOccured:
            return { ...state, isError: true, errorName: action.name ,isPending:action.isPending}
        default:
            return { ...state }
    }
}
export default ErrorReducer;