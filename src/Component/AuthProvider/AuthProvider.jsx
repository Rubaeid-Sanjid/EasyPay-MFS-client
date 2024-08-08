import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, pin) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pin);
  };

  const updateUser = (userName) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName: userName });
  };

  const loginUser = async (email, pin) => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, pin);
  };

  const logOutUser = ()=>{
    return signOut(auth);
  }
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userEmail = { email: currentUser.email };
        axiosPublic.post("/jwt", userEmail).then((res) => {
          if(res.data.token){
            const token = res.data.token;
 
            localStorage.setItem("token", token);
          }
        });
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);
  // window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  //     'size': 'invisible',
  //     'callback': () => {
  //       console.log('Recaptcha verified');
  //     }
  //   }, auth);

  // const signInWithUserNumber = (phoneNumber)=>{
  //     return signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
  // }

  const authInfo = { user, loading, createUser, updateUser, loginUser, logOutUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
