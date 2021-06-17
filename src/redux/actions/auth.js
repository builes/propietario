import {types} from '../types/types';
import {firebase, googleAuthProvider, facebookAuthProvider} from '../firebase/firebase.config'

export const login = (uid, displayName) =>{
       return{
           type: types.login,
           payload: {
               uid,
               displayName
           }
       }
}

export const startLoginEmailPassword = (email, password) =>{
    return (dispatch) => {
        dispatch(login(email, password))
    }
}

export const startGoogleLogin = () =>{
     return (dispatch)=>{
         firebase.auth().signInWithPopup(googleAuthProvider)
         .then( ({user}) =>{
             dispatch(
                 login(user.uid, user.displayName)
             )
             console.log(user)
         });
     }
 }

export const startFacebookLogin = () =>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup(facebookAuthProvider)
        .then( ({user}) =>{
            dispatch(
                login(user.uid, user.displayName)
            )
            console.log(user)
        });
    }
}