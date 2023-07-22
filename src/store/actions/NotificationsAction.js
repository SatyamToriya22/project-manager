import {ErrorOccured, Notifications} from '../../constants';
import {getFirestore} from 'redux-firestore';

const NotificationsAction=() => {
    return (dispatch,getState) => {
        const db=getFirestore();
        db.collection('notifications').get()
        .then((QuerySnapshots) => {
            const data =QuerySnapshots.docs.map((doc) => doc.data().notify)
            const reversedData=[];
            data.forEach(element => {
                reversedData.unshift(element)
            });

            dispatch({type:Notifications,data:reversedData});
        })
        .catch((err)=>{
            dispatch({type:ErrorOccured,name:err.type,isPending:false});
        })
    }
}

export default NotificationsAction;