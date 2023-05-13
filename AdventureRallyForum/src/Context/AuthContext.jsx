import { auth } from "../Firebase/firebase.config";
import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged
} from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("Error creando el contexto");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState("")
  useEffect(() => {
const suscribed = onAuthStateChanged(auth, (currentUser) =>{
  if(!currentUser){
    console.log("No hay usuario activo");
    setUser("");
  }
  else {
    setUser(currentUser);
  }
})
return () => suscribed();
  },[])

  const register = async (email, password, displayName) => {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    await updateProfile(user, { displayName: displayName });
    setUser(user);
    console.log(response);
  };
  
  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  };
  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  };
  const logOut = async () => {
    const response = await signOut(auth);
    console.log(response);
  };
  return (
    <authContext.Provider value={{ register, login, loginWithGoogle, logOut, user }}>
      {children}
    </authContext.Provider>
  );
}
