import { getFirebase } from 'react-redux-firebase'
import { getFirestore } from 'redux-firestore'
import { LoginFailed, LoginSuccess, LogOutSuccessfull, LogOutFailed, SignUpSuccess, SignUpError } from '../../constants';
import moment from 'moment';

const signIn = (credentials) => {
    return (dispatch, getState) => {
        const firebase = getFirebase();
        const firestore=getFirestore();
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: LoginSuccess })
            })
            .catch((err) => {
                console.log('quer err',err)
                dispatch({ type: LoginFailed ,err})
            })


    }
}

export const signOut = () => {
    return (dispatch, getState) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
            .then(() => {
                console.log("Signout Successfull")
                dispatch({ type: LogOutSuccessfull })
            })
            .catch((err) => {
                console.log('Logout Failed')
                dispatch({ type: LogOutFailed })
            })

    }
}

export const signUp = (credential) => {
    return (dispatch, getState) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(credential.email, credential.password)
        .then(response => {
                const db=getFirestore()
                console.log('response',response.user.uid)
                const currentDate=new Date()
                db.collection('notifications').add({
                    notify:`${credential.firstName} ${credential.lastName} Joined The Party.. at ${moment(currentDate).calendar()}`
                }).then(()=>{
                    console.log('Notifactions Updated')
                })
                .catch((err)=>{
                    console.log('Error in Notifications Update',err)
                })
               return firestore.collection('users').doc(response.user.uid).set({
                    firstName: credential.firstName,
                    lastName: credential.lastName,
                    email:credential.email,
                    initials: credential.firstName[0] + credential.lastName[0]
                })
            })
            .then(() => {
                console.log('SignUp Success')
                dispatch({ type: SignUpSuccess ,initials:(credential.firstName[0]+credential.lastName[0]).toUpperCase()})
            })
            .catch(err => {
                console.log('Err',err)
                dispatch({ type: SignUpError, err: err.message })
            })
    }
}
export default signIn;