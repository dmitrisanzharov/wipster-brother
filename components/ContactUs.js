import React, {useState} from 'react'
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import {useGlobal} from '../useContext';
import ReCAPTCHA from "react-google-recaptcha";


// COMPONENTS
import Meta from './Meta.js';
import Navbar from './Navbar'; 
import NavbarLight from './NavbarLight'; 
import ThankYouModal from './ThankYouModal.js';
import Footer from './Footer'; 
import BackToTopButton from './BackToTopButton';




const ContactUs = () => {

    const {handleContactUsRedirect} = useGlobal();
  
    const [state, handleSubmit] = useForm("xyyoyeql");

    const [captchaDone, setCaptchaDone] = useState(false);


    console.log('THIS IS BRANCH NAME JURASSIC'); 

    const handleChange = (token) => {
      console.log(token);
      setCaptchaDone(true);
    }
  


 
    if (state.succeeded) {
  
        handleContactUsRedirect();
  
        return <ThankYouModal message={'Thank you for Contacting Us'} redirectPage={'Home Page'}/>;
    }
  
 

    return (
        <>
  
  <Meta title='contact us page' keywords='contact us page, wipster brother' description='basic wipster brother page' />

<NavbarLight />
<Navbar />
<BackToTopButton />
       

    {/* EMPTY SECTION IN PLACE OF NAVBAR */}

    <section className="p-5 bg-dark">
    <div className="container">

       {/* end of container */}
    </div>
    </section>


    {/* CONTACT US IMAGE SECTION */}


    <section className="bg-dark text-light">

    <div className="container">

        <div className="row">

        <div className={`col-12 col-md-6 p-3 p-md-4 d-flex flex-column justify-content-center align-items-start`}>
            <h1 className='pb-3'>Contact Us</h1>
            <h2 className='pb-3'>You&apos;ve got questions. We&apos;ve got answers</h2>
            <h3>We&apos;d love to help you find the best way to save your inbox and improve your workflow.</h3>

            {/* end of col-1 */}
        </div>


        <div className={`col-12 col-md-6`}>
       <Image src='/images/contactus-chat.png' width="100%" height="100%" layout="responsive" objectFit="contain" alt='my image oh yes'></Image>

       {/* end of col-2 */}
       </div>
            {/* end of flex */}
        </div>
       {/* end of container */}
    </div>
    </section>


{/* GET IN TOUCH SECTION */}

    <section className="p-5">
    <div className="container text-center">


        <h2 className='mt-4'>Get in touch</h2>
        <h4 className="mt-2">Schedule time for a quick 15 minute demo or to speak with one of our sales managers.</h4>


       {/* end of container */}
    </div>
    </section>


{/* the form */}

    <section className="p-5">
    <div className="container">

    <form className='px-5' onSubmit={handleSubmit}>


    <div className="mb-3">
        <label htmlFor="contactUsFirstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="contactUsFirstName" placeholder="John" name='firstName'/>
        <ValidationError 
        prefix="Name" 
        field="firstName"
        errors={state.errors}
      />
    </div>


    <div className="mb-3">
  <label htmlFor="contactUsSecondName" className="form-label">Last Name</label>
  <input type="text" className="form-control" id="contactUsSecondName" placeholder="Smith" name='lastName' />
  <ValidationError 
        prefix="LastName" 
        field="lastName"
        errors={state.errors}
      />
 </div>


    <div className="mb-3">
    <label htmlFor="ContactUsEmail" className="form-label">Your Email</label>
    <input type="email" className="form-control" id="ContactUsEmail" placeholder="abc@mail.com" name='email' />
    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
 </div>



 <div className="mb-3">

<label htmlFor="contactUsPhone" className="form-label">Your Phone</label>

<div className="row g-0">

      <div className="col-2">
<select className="form-select" id="areaCodes" name='areaCode'>
  <option defaultValue>Area code</option>
  <option value="+353">+353</option>
  <option value="+1">+1</option>
  <option value="+34">+34</option>
</select>
<ValidationError 
        prefix="AreaCodes" 
        field="areaCode"
        errors={state.errors}
      />
      {/* end of col-1 */}
</div>

 <div className="col-10 m-0">
<input type="number" className="form-control" id="contactUsPhone" placeholder="please do NOT include 0, zero in here" name='actualPhoneNumber'/>
<ValidationError 
        prefix="ActualPhoneNumber" 
        field="actualPhoneNumber"
        errors={state.errors}
      />
{/* end of col-2 */}
</div>


{/* end of row */}
</div>


{/* end of phone */}
</div>


<div className="mb-3">
  <label htmlFor="contactUsNumberOfEmployees" className="form-label">Number of employees</label>
  <select className="form-select" aria-label="Default select example" id="contactUsNumberOfEmployees" name='numberOfEmployees'>
  <option selected disabled>Please Select</option>
  <option value="1 to 5">1 - 5</option>
  <option value="5 to 25">5 - 25</option>
  <option value="25 and more">25+</option>
</select>
<ValidationError 
        prefix="numberOfEmployees" 
        field="numberOfEmployees"
        errors={state.errors}
      />
 </div>


 <div className="mb-3">
  <label htmlFor="contactUsMessage" className="form-label">Message</label>
  <textarea className="form-control" id="contactUsMessage" rows="4" name='message'></textarea>
  <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
</div>

<div className='my-3 py-1'>
<ReCAPTCHA
        sitekey="6LfwO60dAAAAAF_eRoxjcujIG_sXZJxCAzJHMTMc"
        onChange={handleChange}
      />
</div>



<p className="text-dark">
Wipster uses the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our 
<span className='text-primary' style={{cursor: 'pointer'}} onClick={()=> alert('page under development')}> Privacy Policy.</span>

</p>





    {captchaDone ? <button type="submit" disabled={state.submitting} className="btn btn-success btn-lg mb-5">
        SUBMIT
      </button> : <button type="button" className="btn btn-success btn-lg mb-5" onClick={()=> alert('please do Captcha Validation First')}>
        SUBMIT
      </button> }  


        {/* end of form */}
    </form>



       {/* end of container */}
    </div>
    </section>



      <Footer />


        {/* end of react <> fragment */}
       </>
    )
}

export default ContactUs
