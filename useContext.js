import React, {useState, useEffect, useContext} from 'react';
const axios = require('axios').default;

const AppContext = React.createContext();


let defaultState ={
    email: '', 
    emailInputBlank: false,
    password: '',
    passwordInputBlank: false
}

let newUserState = {
    fName: '',
    sName: '',
    email: '',
    passOne: '',
    passTwo: '',
    description: ''
}



export const AppProvider = ({children}) => {

 
//********************************************************************
//          STATES
// *******************************************************************

    const [userLogin, setUserLogin] = useState(defaultState);
    const {email, password} = userLogin; 
    const [userNotFound, setUserNotFound] = useState(false); 
    const [wrongPassword, setWrongPassword] = useState(false); 
    const [newUser, setNewUser] = useState(newUserState); 
    const [passDidNotMatch, setPassDidNotMatch] = useState(false);
    const [noNameInRegistration, setNoNameInRegistration] = useState(false); 
    const [noSecondNameInRegistration, setNoSecondNameInRegistration] = useState(false); 
    const [noEmailInRegistration, setNoEmailInRegistration] = useState(false); 
    const [noPasswordInRegistration, setNoPasswordInRegistration] = useState(false); 
    const [showThankYouForRegisteringModal, setShowThankYouForRegisteringModal] = useState(false);
    const [originURL, setOriginURL] = useState(''); 
 
    

//********************************************************************
//          FUNCTIONS
// *******************************************************************


    const handleSubmit = (event, data) => {  //NOTE THIS IS LOGIN SUBMIT
        event.preventDefault(); 
         setUserNotFound(false);
      
        if(email === '' && password === ''){
            return setUserLogin({...userLogin, emailInputBlank: true, passwordInputBlank: true});
        }

        if(email === ''){
            return setUserLogin({...userLogin, emailInputBlank: true})
        }

        if(password === ''){
            return setUserLogin({...userLogin, passwordInputBlank: true})
        }

       
        let userFound = data.filter(value=> value.email === email);

        if(userFound[0]){

            console.log(userFound[0]);

            if(userFound[0].pass !== password){
                return setWrongPassword(true); 
            } else {

            localStorage.setItem('userSession', JSON.stringify(userFound[0]));
                  window.location.href = `${origin}/usersession`
            }
            
        } else {
            setUserNotFound(true);
        }

       // end of handleSubmit
    }



    const handleNewUserSubmit = async (e) => {
        e.preventDefault();

        const {passOne, passTwo, fName, sName, email} = newUser;

        if(passOne !== passTwo){
            setPassDidNotMatch(true);
            return;
        }

        if(fName === ''){
            setNoNameInRegistration(true); 
            return;
        }

        if(sName === ''){
            setNoSecondNameInRegistration(true); 
            return;
        }


        if(email === ''){
            setNoEmailInRegistration(true); 
            return;
        }


        if(passOne === ''){
            setNoPasswordInRegistration(true); 
            return;
        }
        

        setShowThankYouForRegisteringModal(true);        

        setTimeout(()=> {
            setShowThankYouForRegisteringModal(false);
            setNewUser({
                fName: '',
                sName: '',
                email: '',
                passOne: '',
                passTwo: '',
                description: ''
            });
    
            let homeURL = window.location.origin;
            window.location.href = `${homeURL}/login`;
    
   
        }, 3000)

        await axios.post(`${originURL}/api/newuser`, {...newUser});
        

        // end of handleNewUserSubmit
    }


    const handleContactUsRedirect = () => {
        setTimeout(()=> {
   
            let homeURL = window.location.origin;
            window.location.href = `${homeURL}/`;
       
        }, 2000)
    }



//********************************************************************
//          useEffects
// *******************************************************************

useEffect(()=> {
    let homeURL = window.location.origin;
    setOriginURL(homeURL); 
}, [])


useEffect(()=> {
    setUserLogin({...userLogin, emailInputBlank: false});
    setUserNotFound(false);
    localStorage.setItem('userSession', '');
}, [email]);


useEffect(()=> {
    setUserLogin({...userLogin, passwordInputBlank: false});
    setUserNotFound(false);
    setWrongPassword(false);
    localStorage.setItem('userSession', '');
}, [password]);


useEffect(()=> {
    let timeOut = setTimeout(()=> {
        setPassDidNotMatch(false)
    }, 3000)
    return ()=> clearTimeout(timeOut); 
}, [passDidNotMatch])

useEffect(()=> {
    let timeOut = setTimeout(()=> {
        setNoNameInRegistration(false);
    }, 3000)
    return ()=> clearTimeout(timeOut); 
}, [noNameInRegistration])


useEffect(()=> {
    let timeOut = setTimeout(()=> {
        setNoSecondNameInRegistration(false);
    }, 3000)
    return ()=> clearTimeout(timeOut); 
}, [noSecondNameInRegistration])


useEffect(()=> {
    let timeOut = setTimeout(()=> {
        setNoEmailInRegistration(false);
    }, 3000)
    return ()=> clearTimeout(timeOut); 
}, [noEmailInRegistration])


useEffect(()=> {
    let timeOut = setTimeout(()=> {
        setNoPasswordInRegistration(false);
    }, 3000)
    return ()=> clearTimeout(timeOut); 
}, [noPasswordInRegistration])




//********************************************************************
//          RETURN STUFF & useGlobal
// *******************************************************************
 

    return (
        <AppContext.Provider value={{
            userLogin, setUserLogin,
            handleSubmit,
            userNotFound,
            wrongPassword,
            newUser, setNewUser,
            handleNewUserSubmit,
            passDidNotMatch,
            noNameInRegistration,
            noSecondNameInRegistration,
            noEmailInRegistration,
            noPasswordInRegistration,
            showThankYouForRegisteringModal,
            handleContactUsRedirect,
            originURL

        }}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobal = () => {
    return useContext(AppContext);
}