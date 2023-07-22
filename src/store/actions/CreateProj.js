import { addProject, ErrorOccured } from "../../constants";
import { getFirestore } from "redux-firestore";
import moment from "moment";

export const createProject = (data) => {
    return (dispatch, getState) => {
        const db = getFirestore();
        var len = 0;
        console.log('Enteringcreate Proj',data)
        const date = new Date()
        const currentDate = moment(date).calendar()
        db.collection('project-Data').get()
            .then((QuerySnapshots) => {
                const queryData = QuerySnapshots.docs.map((doc) => doc.data())
                len = queryData.length
                // props.createProj({ title, postedBy, date: currentDate, description })
                console.log('coming',queryData)
                return db.collection("project-Data").add(
                    {
                        ...data, date: currentDate
                    }
                )
            })
            .then((Data) => {
                const db=getFirestore();
                db.collection('notifications').add({
                    notify:data.postedBy+` Added New Project at ${currentDate}`})
                .then(()=>{
                    console.log('Notifications Updated From Create Page')
                })
                .catch((err)=>{
                    console.log('Error will Updating Notifications',err)
                })
                console.log('Data is Successfully Added')
                dispatch({
                    type: addProject,
                    data: { ...data, date: currentDate },
                    dataSubmit: true
                })
            })
            .catch((err) => {
                console.log('Some Error Occured while Adding Data', err)
                dispatch({ type: ErrorOccured, name: err.type, isPending: false })
            })
    }
    //Fetch The List of Project for Finding the Length of the List of Project in Database for creating Id
}

