import React, {useEffect, useState} from 'react';

const usersession = () => {

    const [userData, setUserData] = useState('');
    const [loading, setLoading] = useState(true); 

    useEffect(()=> {

        let data = localStorage.getItem('userSession');

        if(!data){
            console.log('redirect');
            const mainURL = window.location.origin; 
            window.location.href = `${mainURL}/login`
        } else {
            console.log('do NOT redirect')
            setUserData(JSON.parse(data)); 
        }
        
    }, [])

    useEffect(()=> {
        setLoading(false); 
    }, [userData])



    if(userData === ''){
        return (
            <div style={{padding: '20px'}}>
                <h1>You are being re-directed back to login page</h1>
            </div>
        )
    }

    if(loading && userData !== ''){
        return (
            <div style={{padding: '20px'}}>
                <h1>Loading please wait...</h1>
            </div>
        )
    }

    if(!loading){

        return (
            <div style={{padding: '30px'}}>
               <h1>Hello, {userData.name} {userData.secondname}!</h1>
               <br />
               <h2>Here is your description: </h2>
               <br />
               <p>{userData.description}</p>
            </div>
        )


    }


}

export default usersession
