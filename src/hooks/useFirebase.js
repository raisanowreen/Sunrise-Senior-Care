import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Firebase/Firebase.init";

initializeAuthentication();

const auth = getAuth();
const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
const [name, setName] =useState('');
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

   

    
// Google sign in method implementation
const signInUsingGoogle = () =>{
    setIsLoading(true);
const googleProvider = new GoogleAuthProvider();
return signInWithPopup(auth, googleProvider)

.finally(() => setIsLoading(false));
}

const toggleLogin = e =>{
   setIsLogin(e.target.checked);
}

const handleNameChange = e =>{
    setName(e.target.value);
}

const handleEmailChange = e =>{
    setEmail(e.target.value);
  }
  const handlePasswordChange = e =>{
    setPassword(e.target.value);
  }
    const handleRegistration = e =>{
      e.preventDefault();
      console.log(email, password);
      if(password.length <6){
        setError('Password must be 6 letters long')
        return;
      }
      if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
        setError('Password must contain two uppercase')
        return;
      }


isLogin ? processLogin(email, password) : registerNewUser(email, password);

  
    }
    // user login implementation
    const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email,password)
       
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
          })
          
          .catch(error =>{
              setError(error.message);
          })
    }

const setUserName = () =>{
    updateProfile(auth.currentUser, {displayName: name})
    .then(result => { })
}

// user register implementation
    const registerNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          setError('');
          setUserName();
        })
        .catch(error =>{

            setError(error.message);
        })
    }

// observe user state change
useEffect(() =>{
const unSubscribed = onAuthStateChanged(auth, user =>{
        if(user){
            setUser(user)
        }
        else{
            setUser({})
        }
        setIsLoading(false); 
    });
    return () => unSubscribed;
},[])

// logout imnplementation
const logOut = () =>{
    setIsLoading(true);
    signOut(auth)
    .then(() =>{})
    .finally(() => setIsLoading(false));
}
    return {
        user,
        logOut,
        signInUsingGoogle,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        error,
        toggleLogin,
        isLogin,
        handleNameChange,
        isLoading
    }
}

export default useFirebase;