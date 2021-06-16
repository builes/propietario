import { types } from '../types/types';
import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase.config'
import {startLoading, finishLoading} from './uiError'


export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
       return firebase.auth().signInWithEmailAndPassword( email, password)
       .then( ({user}) => {
           dispatch(startLoading)
          dispatch(login(user.id, user.displayName));
       })
       .catch( e => {
           console.log(e)
           dispatch(finishLoading)
       })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
                console.log(user)
            });
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) =>{
    return (dispatch)=>{

        firebase.auth().createUserWithEmailAndPassword( email, password)
        .then( async({user}) =>{
            
            await user.updateProfile({ displayName: name});

            dispatch(
                login(user.uid, user.displayName)
            );
            
        })
        .catch( e => {
            console.log(e)
        }

        )
    }
}

export const startFacebookLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(facebookAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
                console.log(user)
            });
    }
}