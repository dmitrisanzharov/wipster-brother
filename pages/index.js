import styles from '../styles/Home.module.css';
import React, {useState, useEffect} from 'react'; 
import Image from 'next/image';
import $ from 'jquery';
import Link from 'next/link'

// COMPONENTS IMPORT
import Meta from '../components/Meta.js';
import Navbar from '../components/Navbar'; 
import NavbarLight from '../components/NavbarLight'; 
import WipsterMediaImage from '../components/images/WipsterMediaImage';
import WipsterIntegrationsImage from '../components/images/WipsterIntegrationsImage';
import IndexCardImage from '../components/images/IndexCardImage';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';


export default function Home() {

//********************************************************************
//          style imports, objects, arrays
// *******************************************************************

  const {dr, db, iFrameStyle, graySectionWithWave, imageContainer} = styles; 
  let arrayOfTextForHeading = ['audio', 'video', 'PDFs', 'images']; 



  //********************************************************************
//          STATE CONTROL
// *******************************************************************

  const [arrayOfTextForHeadingIndex, setArrayOfTextForHeadingIndex] = useState(0); 



  //********************************************************************
//          FUNCTIONS AND OTHER STUFF
// *******************************************************************







//********************************************************************
//         useEffect
// *******************************************************************


  useEffect(()=> {
    let timeOut = setTimeout(()=> {
      setArrayOfTextForHeadingIndex(arrayOfTextForHeadingIndex+1)
    }, 3000)
    return ()=> clearTimeout(timeOut)
  }, [])

  useEffect(()=> {

    let timeOut = setTimeout(()=> {
      
      if(arrayOfTextForHeadingIndex === arrayOfTextForHeading.length-1){
        setArrayOfTextForHeadingIndex(0)
      } else {
        setArrayOfTextForHeadingIndex(arrayOfTextForHeadingIndex+1)
      }


    }, 3000)
    return ()=> clearTimeout(timeOut)
      


  }, [arrayOfTextForHeadingIndex])


//********************************************************************
//          ACTUAL HTML
// *******************************************************************

  return (

    <>

      <Meta title='home page' keywords='homepage, wipster brother' description='basic wipster brother page' />

    <NavbarLight />
    <Navbar />


 



    {/* BACK TO TOP BUTTON  */}

    <BackToTopButton />



    {/* EMPTY SECTION IN PLACE OF NAVBAR */}

    <section className="p-4 bg-dark" id='top'>
    <div className="container">

       {/* end of container */}
    </div>
    </section>


    {/* REVIEW SECTION */}

    <section className="p-5 bg-dark text-light" id='test1'>

    <div className={`container d-flex flex-column justify-content-center align-items-center p-5 text-center`}>

      <div className='h1'>
        Review, approve 	&amp; share <span className='text-success fw-bold'>{arrayOfTextForHeading[arrayOfTextForHeadingIndex]}</span> seamlessly
      </div>

      <div className='fs-4 mt-4'>
      Because <span className='fs-3 fw-bold'>reviewing</span>  creative projects should be the easy part
      </div>




       {/* end of container */}
    </div>
    </section>


    {/* CLIENT QUOTES SECTION ----------------------------------------*/}

    <section className="p-5">
    <div className="container text-center">


      <div className="h4">The world’s most visionary companies bring their ideas to life with Wipster.</div>


<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

  <div className={`carousel-indicators `}>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>


  <div className={`carousel-inner  mt-4`}>

    <div className={`carousel-item active mb-4 mb-md-3`} data-bs-interval="10000">
      <Image src="/images/dell.png" width={200} height={200} alt='dell logo image'></Image>
    </div>


    <div className={`carousel-item mb-4 mb-md-3`} data-bs-interval="2000">
    <Image src="/images/intel.png" width={200} height={200} alt='intel logo image'></Image>
    </div>


    <div className={`carousel-item mb-4 mb-md-3`}>
    <Image src="/images/ITV.png" width={200} height={200} alt='intel logo image'></Image>
    </div>

    <div className={`carousel-item mb-4 mb-md-3`}>
    <Image src="/images/Visa.png" width={200} height={200} alt='intel logo image'></Image>
    </div>

    {/* end of carousel-inner */}
  </div>


  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

       {/* end of container */}
    </div>
    </section>




  {/*  SECTION:  Video workflow that works for you*/}


  <section className="p-5" style={{background: '#F5F6F8'}}>
    <div className="container text-center mt-4">

      <div className="h1 mb-3">
      Video workflow that works for you
      </div>


      <div className={`h4  px-5 text-secondary fw-normal mb-4`}>
      Here&apos;s everything you need to know about how Wipster streamlines the content review and approval proofing process for creative teams, worldwide.
      </div>


        <iframe id='ytFrameIndexPage' src="https://www.youtube.com/embed/VX7aE-v8yYo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={`${iFrameStyle}`}></iframe>


       {/* end of container */}
    </div>
    </section>


    {/* THE QUOTE BOX */}

    <section className="px-5 pt-5">
    <div className="container text-center">

    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#2B79F8" className="bi bi-quote" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
  </svg>

    <div className="h3 my-4 text-secondary">
    Working with Wipster has been a breath of fresh air. It has completely changed the way we operate.
    </div>

    <div>
      <Image src='/images/Caitlin+Conklin.png' width={160} height={80} alt='intel logo image'></Image>
      <div className='h5 fw-bold'>Caitlin Conkin</div>

      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#2B79F8" className="bi bi-dash-lg" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
</svg>
    </div>

       {/* end of container */}
    </div>
    </section>


{/* the waves 1 */}


    <svg xmlns="http://www.w3.org/2000/svg" className='' id='homePageWave1'viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,256L80,240C160,224,320,192,480,192C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

    <div className={`${graySectionWithWave} px-5 `}>

        <div className="row">

          <div className={` col-12 col-md-6`}>

        <Image src='/images/wipster-medialibrary-1.png' width="100%" height="100%" layout="responsive" objectFit="contain" alt='intel logo image'></Image>

 
            {/* end of col1 */}
          </div>

          <div className={`col-12 col-md-6 p-3 p-md-5 d-flex flex-column justify-content-center align-items-start`}>

            <h2>Save your inbox, use Wipster</h2>

            <p className='text-secondary'>Getting a complex creative project over the line can be tricky, with feedback coming back through a range of channels, and critical updates sometimes getting buried in the pile.</p>

            <p className='text-secondary'>Wipster&apos;s powerful video proofing tools ensure that stakeholders get exactly what they want, and content producers don&apos;t get any surprises.</p>

            <p className='text-secondary'>Unlimited reviewers provide laser-focused feedback all in one place, and Wipster syncs that feedback with your existing collaboration and creation software to get you to your best final draft, faster.</p>


            {/* end of col2 */}
          </div>




          {/* end of grid */}
        </div>



      {/* end of gray section with waves */}
    </div>


    <svg xmlns="http://www.w3.org/2000/svg" className='' viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,256L80,240C160,224,320,192,480,192C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>




    {/* STRESS FREE REVIEWING */}


    <section className="p-5 ">
    <div className="container">

      <div className="row">

        <div className={`col-12 col-md-6 p-3 p-md-5 text-secondary d-flex flex-column justify-content-center align-items-start`}>



          <div className="h1 text-dark">Stress free reviewing</div>

          <p>Creatives need stakeholder approval to move projects to the next stage.  Reviewers need an easy and frictionless user experience to provide feedback quickly and efficiently. </p>

          <p>Wipster brings stakeholders seamlessly into the creative review process with:</p>   

          <ul>
            <li>No downloading of software or plugins</li>
            <li>No reviewer login or software expertise required</li>
            <li>Mobile capability to provide feedback on-the-go from any device</li>
            </ul>   

            <p>With the agile and customizable capability for multiple tiers of review, stakeholders collaborate, comment, review and approve, all in one place.</p>    

          {/* end of col1 */}
        </div>

        <div className="col-12 col-md-6">
        <Image src='/images/wipster-stress-free-reviewing.png' width="100%" height="100%" layout="responsive" objectFit="contain" alt='intel logo image'></Image>
          {/* end of col2 */}
        </div>
        {/* end of row */}
      </div>
       {/* end of container */}
    </div>
    </section>


    <section className="p-5 bg-dark text-light ">
    <div className="container">

      <div className="row">
      <div className="col-12 col-md-4"></div>

        <div className="col-12 col-md-8">

          <div className="h1 mb-3">Collaboration any time, any place</div>

          <p className='h4 fw-lighter mb-4'>Gone are the days of synchronous review, where all your stakeholders could get in a room and approve content together in real time.</p>
          <p className='h4 fw-lighter mb-4'>Wipster supports global teams across time zones with asynchronous review.  Get your whole team heard, and review your work collaboratively in a virtual space, around the clock. </p>
          <p className='h4 fw-lighter mb-4'>Feedback threads facilitate conversations, and tasks and notifications keep everyone on the same page.</p>

          {/* end of col2 */}
        </div>
      </div>
       {/* end of container */}
    </div>
    </section>


    {/* REVIEW ANYTIME SECTION */}


    <section className="p-5 bg-primary text-light ">
    <div className="container text-center px-2 px-md-5">

    <div className="h1 mb-4">
    Review anywhere
    </div>

    <div className="h4 mb-4">
    Access your media and reviews from anywhere at any time, web based review available on all devices.
    </div>

    <WipsterMediaImage />

       {/* end of container */}
    </div>
    </section>


    {/* SUPLIMENTARY NEW MOBILE REVIEW SECTION */}

    <section className="p-5 text-light text-center " style={{background: '#0C58BD'}}>
    <div className="container">

      <div className="h3 mb-3">
      <span className={`text-dark fw-bold ps-2 pe-1`} style={{background: '#F3BFEC'}}>NEW</span> MOBILE REVIEW
      </div>

      <div className="h5 fw-normal">
      Available on Mobile now! Just follow any shared review link to try it out.
      </div>


       {/* end of container */}
    </div>
    </section>


    {/* SECURITY SECTION */}

    <section className="p-5 bg-light text-center ">
    <div className="container">


    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#198754" className="bi bi-dash-lg" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
</svg>

<div className="h1 mb-3">Security</div>
<div className="h2 mb-2">You take your security seriously.  We do, too. </div>
<div className="h5 fw-normal mb-5">Learn how Wipster is working to keep your best ideas safe.</div>

<button type="button" className={`btn btn-primary btn-lg hoverButton`} onClick={()=> alert('page under development')}>SECURITY FEATURES</button>




       {/* end of container */}
    </div>
    </section>


    {/* INTEGRATIONS SECTION */}


    <section className="p-5 ">
    <div className="container text-center">

      <div className="h1">
      Integrations
      </div>

      <div className="h3 text-secondary fw-normal mb-4">
      Review and approval is part of a much bigger creative process. 
      </div>

      <div className='h5 px-1 px-md-5 mb-5'>Review doesn&apos;t happen on its own.  And no one wants to spend their whole day creating in a content platform like Adobe Premiere, only to log out and find a frame note in another piece of software.  Learn how Wipster eliminates the middle-man and syncs seamlessly with the media, storage and collaboration tools that you use most.</div>


      <WipsterIntegrationsImage />

      <button type="button" className={`btn btn-success btn-lg mt-5 hoverButton`} onClick={()=> alert('page under development')}>SECURITY FEATURES</button>


      <div className="h1 mt-5 p-1 p-md-3">Create. Share. Collaborate. Iterate. Track. Approve.</div>

       {/* end of container */}
    </div>
    </section>


  {/* WIPSTER BLOG SECTION */}


  <section className="p-5 bg-light text-center ">
    <div className="container">


    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#198754" className="bi bi-dash-lg" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
</svg>

<div className="h1 mb-3">From the Wipster blog</div>
<div className="h5 fw-normal mb-5">Everything you need to know about industry trends, integrations and updates from the Wipster team.</div>

      <div className="row g-4">


        {/* COL 1 */}

      <div className="col-12 col-md-6 col-lg-4" onClick={()=> alert('page under development')}>
        
      <div className="card hoverButton">



        <div className="card-body text-start">

          <IndexCardImage url='/images/runner.png'/>

          <p className="card-text fw-bold text-dark mt-4 mb-2">7 MIN READ</p>

          <h5 className="card-title h3">Speed Up And Simplify Your Video Review and Approval Process</h5>
          <h6 className="card-subtitle mb-3 text-muted">Nov 11, 2021 by Wipster Content Team</h6>
          <p className="card-text mb-1 mb-md-5 mb-lg-4 mb-xl-5">Pre-production = DoneProduction = DonePost Production = Review and approval process pending ...</p>
        </div>

    {/* end card */}
  </div>



      {/* end of col */}
      </div>


 {/* COL 2 */}

      <div className="col-12 col-md-6 col-lg-4" onClick={()=> alert('page under development')}>
        
        <div className="card hoverButton">
  
  
  
          <div className="card-body text-start">
  
            <IndexCardImage url='/images/laptopImage.png'/>
  
            <p className="card-text fw-bold text-dark mt-4 mb-2">5 MIN READ</p>
  
            <h5 className="card-title h3">Five Steps For Effective Feedback</h5>
            <h6 className="card-subtitle mb-3 text-muted">Wipster Content Team : Nov 10, 2021 11:17:35 PM</h6>
            <p className="card-text">Are you a post-production professional finding yourself drowning in endless feedback loops? I don’t mean audio...</p>
            <p className="card-text mb-0 mb-md-4 text-light">.</p>
             </div>
  
      {/* end card */}
    </div>
  
  
  
        {/* end of col */}
        </div>


       {/* COL 3 */}

        <div className="col-12 col-md-6 col-lg-4" onClick={()=> alert('page under development')}>
        
        <div className="card hoverButton">
  
  
  
          <div className="card-body text-start">
  
            <IndexCardImage url='/images/blankImage.png'/>
  
            <p className="card-text fw-bold text-dark mt-4 mb-2">3 MIN READ</p>
  
            <h5 className="card-title h3">How Multi Asset Management Helps Video Teams Work Better Together</h5>
            <h6 className="card-subtitle mb-3 text-muted">Wipster Content Team : Nov 10, 2021 11:16:28 PM</h6>
            <p className="card-text mb-1 mb-lg-1 mb-xl-1 mb-xxl-4">When was the last time finding a file for work became a tedious subplot to your day? Maybe it wasn&apos;t an entire...</p>
           </div>
  
      {/* end card */}
    </div>
  
  
  
        {/* end of col */}
        </div>





        {/* end of row */}
      </div>

       {/* end of container */}
    </div>
    </section>





    {/* PRICED TO MEET YOUR NEEDS SECTION */}

    <section className="p-5 ">
    <div className="container text-center">


    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#198754" className="bi bi-dash-lg" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
</svg>


<div className='h1 my-4'>Priced to meet your needs</div>

<div className="h5 px-1 px-md-5 text-secondary">From Freelance Video Editor to Enterprise Organization, we have a solution for you.</div>

<div className="h5 px-1 px-md-5 text-secondary mt-4">With plans ranging from completely free to full-service, Wipster is flexible to fit how you do business.</div>


<button type="button" className={`btn btn-success btn-lg hoverButton my-5`} onClick={()=> alert('page under development')}>SECURITY FEATURES</button>



       {/* end of container */}
    </div>
    </section>


    <Footer />
   


     

      {/* end of REACT fragment */}
    </>
  )
}
