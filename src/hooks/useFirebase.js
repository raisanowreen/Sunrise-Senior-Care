import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Firebase/Firebase.init";

initializeAuthentication();

const auth = getAuth();
const useFirebase = () =>{
const [name, setName] =useState('');
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    

const signInUsingGoogle = () =>{
    setIsLoading(true);
const googleProvider = new GoogleAuthProvider();
signInWithPopup(auth, googleProvider)
.then(result =>{
    setUser(result.user);
})
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
        setError('Must 6 letters')
        return;
      }
      if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
        setError('Password must contain two uppercase')
        return;
      }

isLogin ? processLogin(email, password) : registerNewUser(email, password);

  
    }
    const processLogin = (email, password) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
          })
          
          .catch(error =>{
              setError(error.message);
          })
          .finally(() => setIsLoading(false));
    }

const setUserName = () =>{
    updateProfile(auth.currentUser, {displayName: name})
    .then(result => { })
}


    const registerNewUser = (email, password) =>{
        setIsLoading(true);
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
        .finally(() => setIsLoading(false));
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