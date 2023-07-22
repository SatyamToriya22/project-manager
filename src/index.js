import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import { reactReduxFirebase, ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import rootReducer from './store/reducers';
import fbConfig from './config/fbConfig';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from 'firebase';
import thunk from 'redux-thunk'
import { useSelector } from 'react-redux';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
const rrfProps = {
  firebase: firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

const AuthIsLoaded=({children})=>{
  const auth=useSelector((state)=> state.firebase.auth)
  if(!isLoaded(auth))return <div><h5>Loading Screen...</h5></div>;
  
  return children;
}
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

