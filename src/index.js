import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from "./reducers/rootReducer"


import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import {Provider} from "react-redux"
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";

//for render on auth ready
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';




const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, fbConfig)
  )
);

const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}

const rrfProps = {
  firebase,
  config: fbConfig,
//second config added here
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)

  if (!isLoaded(auth)){
    return <div className="loading"> 
              <img className="loading-image" src={require("./img/loadingPlant.png")} />
            </div>;
  } 
      return children
}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded> 
      <App />
      </AuthIsLoaded>
      
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
