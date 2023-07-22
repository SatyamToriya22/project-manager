import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase"
import CreateProj from './CreateProjReducer'
import DashboardReducer from "./DashboardReducer";
import ErrorReducer from "./ErrorReducer";
import NotificationsReducer from "./NotificationsReducer";
import authReducer from "./AuthReducer";

console.log('root', DashboardReducer)
const rootReducer = combineReducers(
    {
        createProject: CreateProj,
        dashboard: DashboardReducer,
        firestore: firestoreReducer,
        firebase:firebaseReducer,
        errorOccured: ErrorReducer,
        notifications: NotificationsReducer,
        auth:authReducer
    }
)

export default rootReducer;