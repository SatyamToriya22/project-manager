import { ErrorOccured, ProjectList } from "../../constants"
import { getFirestore } from "redux-firestore"
import { useState } from "react"

const ProjectListAction = (email) => {
    return (dispatch, getState) => {
        console.log('data action')
        const db = getFirestore();
        db.collection("project-Data")
            .get()
            .then((querySnapShots) => {
                const data = querySnapShots.docs.map((doc) => doc.data())
                db.collection('users').get()
                    .then((QuerySnapshots) => {
                        const list = QuerySnapshots.docs.map((doc) => doc.data())
                        const prof = list.filter((item) => item.email == email)

                        console.log('Dispatch Done', data, prof)
                        dispatch({
                            type: ProjectList,
                            data: { data: data, isPending: false },
                            initials: prof[0].initials
                        })
                    }).catch((err) => {
                        console.log('Error Occured', err)
                    })
            })
            .catch((err) => {
                console.log("Error Occured", err)
                dispatch({
                    type: ErrorOccured,
                    name: err.type,
                    isPending: false
                })
            })
    }


}

export default ProjectListAction
