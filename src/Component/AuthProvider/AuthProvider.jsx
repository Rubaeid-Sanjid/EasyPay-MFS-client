import PropTypes from 'prop-types';
import { createContext } from 'react';
import { auth } from '../Firebase/FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const createUser = (email, pin)=>{
        return createUserWithEmailAndPassword(auth, email, pin)
    }
    
    const updateUser = (userName)=>{
        return updateProfile(auth.currentUser, {displayName: userName })
    }

    const loginUser = async(email, pin)=>{
        return await signInWithEmailAndPassword(auth, email, pin)
    }

    // window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    //     'size': 'invisible',
    //     'callback': () => {
    //       console.log('Recaptcha verified');
    //     }
    //   }, auth);

    // const signInWithUserNumber = (phoneNumber)=>{
    //     return signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
    // }

    const authInfo = {createUser, updateUser, loginUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;