import React, {useEffect, useState} from 'react';
import Link from 'next/link'; 
import {useGlobal} from '../useContext'; 
import Meta from './Meta'


const Login = () => {

    const {userLogin, setUserLogin, handleSubmit, userNotFound, wrongPassword} = useGlobal();
    const {email, password, emailInputBlank, passwordInputBlank} = userLogin; 

    const [fullUserData, setFullUserData] = useState([]); 

const getFullUserData = async () => {
 
        const res = await fetch(`http://localhost:3000/api/fulluserdata`);
        const fulluserdata = await res.json();
        setFullUserData(fulluserdata); 

    }


    useEffect(()=> {
        getFullUserData();
    }, [])


    

//********************************************************************
//          ACTUAL HTML
// *******************************************************************
    
    return (
        <div className='text-center signInBody'>

            <Meta title='login page' keywords='login page, wipster brother' description='basic wipster brother page' />

            <main className="form-signin">
            <form>
                <h1 className='mb-5'>Wipster Brother</h1>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
                    value={email} onChange={e=> setUserLogin({...userLogin, email: e.target.value})}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                
                {emailInputBlank && <h6 className='text-danger my-2'>Please enter email</h6>}


                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
                    value={password} onChange={e=> setUserLogin({...userLogin, password: e.target.value})} 
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                {passwordInputBlank && <h6 className='text-danger my-2'>Please enter password</h6>}



                    <button className="w-100 btn btn-lg btn-success hoverButton mt-3" type="submit" onClick={()=> handleSubmit(event, fullUserData)}>Sign in</button>

                    {userNotFound && <div className='h6 my-3 text-danger'>email {email} is not found on the system, please create an account by using link below</div>}

                    {wrongPassword && <div className='h6 my-3 text-danger'>the password you have entered is incorrect please try again</div>}

                    

     

                <div className="h6 mt-4 hoverGreen fw-normal" style={{cursor: 'pointer'}}>
                    <Link href='/newaccount'>Create an account</Link>
                    </div>

                <p className="mt-5 mb-3 text-muted">© 2017–{new Date().getFullYear()}</p>
            </form>
        </main>
    </div>
    )
}

export default Login



