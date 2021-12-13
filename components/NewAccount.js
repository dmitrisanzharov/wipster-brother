import React from 'react'
import {useGlobal} from '../useContext';
import ThankYouModal from './ThankYouModal';
import Meta from './Meta'

const NewAccount = () => {

    const {newUser, setNewUser, handleNewUserSubmit, passDidNotMatch,
    noNameInRegistration, noSecondNameInRegistration, noEmailInRegistration, 
    noPasswordInRegistration, showThankYouForRegisteringModal
    } = useGlobal(); 
    const {fName, sName, email, passOne, passTwo, description} = newUser;
      

    return (
        <div className='signInBody text-center'>

<Meta title='new account page' keywords='new account page, wipster brother' description='basic wipster brother page' />

            {showThankYouForRegisteringModal && <ThankYouModal message={'Thank you for registering'} redirectPage={'Login Page'}/>}
            
            <main className="form-signin">
                
                <h1 className='mb-3'>Wipster Brother</h1>
                <h1 className="h3 mb-3 fw-normal">Please register</h1>

                <form className='text-start p-2'>

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John" required
                onChange={e=> setNewUser({...newUser, fName: e.target.value})}
                value={fName}
                />
                </div>

                {noNameInRegistration && <h6 className='text-danger my-3'>Please Enter Name</h6>}


                <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">Second Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Smith" required
                onChange={e=> setNewUser({...newUser, sName: e.target.value})}
                value={sName}
                />
                </div>


                {noSecondNameInRegistration && <h6 className='text-danger my-3'>Please Enter Second Name</h6>}

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput3" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="example@mail.com" required
                onChange={e=> setNewUser({...newUser, email: e.target.value})}
                value={email}
                />
                </div>

                {noEmailInRegistration && <h6 className='text-danger my-3'>Please Enter Email</h6>}

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput4" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput4" required
                onChange={e=> setNewUser({...newUser, passOne: e.target.value})}
                value={passOne}
                />
                </div>

                {noPasswordInRegistration && <h6 className='text-danger my-3'>Please Enter Password</h6>}

                {passDidNotMatch && <h6 className='text-danger my-3'>Passwords did not match</h6>}

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput5" className="form-label">Password re-enter to confirm</label>
                <input type="password" className="form-control" id="exampleFormControlInput5" required
                onChange={e=> setNewUser({...newUser, passTwo: e.target.value})}
                value={passTwo}
                />
                </div>

                {passDidNotMatch && <h6 className='text-danger my-3'>Passwords did not match</h6>}

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Descritpion (optional)</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                    onChange={e=> setNewUser({...newUser, description: e.target.value})}
                    value={description}
                    ></textarea>
                    </div>


                    <button className="w-100 btn btn-lg btn-success hoverButton mt-3" type="submit"
                    onClick={handleNewUserSubmit}
                    >Register</button>

                    <p className="mt-5 mb-3 text-muted text-center">© 2017–{new Date().getFullYear()}</p>
  

                </form>
            </main>
            {/* end of mainWrapper signInBody*/}
        </div>
    )
}

export default NewAccount
