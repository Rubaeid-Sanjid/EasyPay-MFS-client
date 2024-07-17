import PropTypes from 'prop-types';
import { createContext } from 'react';
import { auth } from '../Firebase/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const createUser = (email, pin)=>{
        return createUserWithEmailAndPassword(auth, email, pin)
    }

    const authInfo = {createUser};
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