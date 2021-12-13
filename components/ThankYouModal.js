import React from 'react'

const ThankYouModal = ({message, redirectPage}) => {
    return (
        <div style={{
            width: '100vw', 
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.3)',
            position: 'absolute',
            top: '0',
            left: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '15px'
            }} className='text-center'>

            <div style={{
                borderRadius: '10px',
                width: 'fit-content',
                background: 'white',
                padding: '20px',
            }}>
                <h1 className='p-3'>{message}!</h1>
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <h2 className='p-3'>You are now being directed to {redirectPage}!</h2>
            </div>



        </div>
    )
}

export default ThankYouModal
