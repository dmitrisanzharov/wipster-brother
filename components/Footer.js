import React, {useEffect} from 'react'
import Link from 'next/link'
import {useGlobal} from '../useContext';
import $ from 'jquery'

const Footer = () => {

   const {footerSocial} = useGlobal();  


    function footerJQuery(){

        $(document).ready(()=> {
            
      
          // FOOTER STUFF
      
          $('ul > li').addClass('text-secondary'); 
       
          let width = $(window).width();
       
          if(width < 576){
            $('.toggleButtons').show();
            $('.productUL').slideUp();
            $('.resourcesUL').slideUp();
            $('.wipsterAppUL').slideUp();
            $('.aboutUsUL').slideUp();
          } else {
            $('.toggleButtons').hide();
            $('.productUL').slideDown();
            $('.resourcesUL').slideDown();
            $('.wipsterAppUL').slideDown();
            $('.aboutUsUL').slideDown();
          }
         
       
          $('.productToggleButton').click(()=> {
              $('.productUL').slideToggle();
          });
      
          $('.resourcesToggleButton').click(()=> {
            $('.resourcesUL').slideToggle();
        });
      
          $('.wipsterAppToggleButton').click(()=> {
            $('.wipsterAppUL').slideToggle();
        });
      
        $('.aboutUsToggleButton').click(()=> {
          $('.aboutUsUL').slideToggle();
      });
      
      
         // end of document ready
        })
      
       // end of footerJQuery
      }



        useEffect(()=> {
            footerJQuery(); 
          
            $(document).ready(()=> {
                $(window).resize(()=> {
                  footerJQuery(); 
                })
            })
            
          }, [])



    return (
        <div>
             {/* FOOTER SECTION - LINKS*/}
 
 
    <section className="p-5 bg-dark text-light text-center text-sm-start">
    <div className="container">
 
      <div className="row">


      {/* PRODUCT COL */}

      <div className="col-12 mb-4 col-sm-3 mb-sm-0">
 
      <h4>Product &nbsp;
        <span className='toggleButtons productToggleButton'><i className="bi bi-chevron-down"></i></span>
        </h4>
 
 
        <ul className='productUL'>
          <li className='mt-4' onClick={()=> alert('page under development')}>Features</li>
          <li className='mt-3' onClick={()=> alert('page under development')}>Integrations</li>
          <li className='mt-3' onClick={()=> alert('page under development')}>Security</li>
        </ul>
 
  
        {/* end of .col */}
      </div>


{/*   RESOURCES COL */}

      <div className="col-12 mb-4 col-sm-3 mb-sm-0">
 
 <h4>Resources &nbsp;
   <span className='toggleButtons resourcesToggleButton'><i className="bi bi-chevron-down"></i></span>
   </h4>


   <ul className='resourcesUL'>
     <li className='mt-4' onClick={()=> alert('page under development')}>Knowledge base</li>
     <li className='mt-3' onClick={()=> alert('page under development')}>Blog</li>
     <li className='mt-3' onClick={()=> alert('page under development')}>Education Center</li>
     <li className='mt-3' onClick={()=> alert('page under development')}>Case Studies</li>
   </ul>


   {/* end of .col */}
 </div>



 {/*   RESOURCES Wipster APP*/}

 <div className="col-12 mb-4 col-sm-3 mb-sm-0">
 
 <h4>Wipster App &nbsp;
   <span className='toggleButtons wipsterAppToggleButton'><i className="bi bi-chevron-down"></i></span>
   </h4>


   <ul className='wipsterAppUL'>
     <li className='mt-4' onClick={()=> alert('page under development')}>Status</li>
     <li className='mt-3' onClick={()=> alert('page under development')}>Developers</li>
   </ul>


   {/* end of .col */}
 </div>


 {/*   RESOURCES About Us*/}

 <div className="col-12 mb-4 col-sm-3 mb-sm-0">
 
 <h4>About Us &nbsp;
   <span className='toggleButtons aboutUsToggleButton'><i className="bi bi-chevron-down"></i></span>
   </h4>


   <ul className='aboutUsUL'>
     <li className='mt-4' onClick={()=> alert('page under development')}>Our Story</li>
     <li className='mt-3' onClick={()=> alert('page under development')}>Employment</li>
     <li className='mt-3'>
       <Link href='/contactus'>
       Contact
       </Link>
       </li>
   </ul>


   {/* end of .col */}
 </div>
 
 {/* end of ROW */}
 </div>
 
       {/* end of container */}
    </div>
    </section>

      {/* FOOTER 2, WIPSTER LOGO AND SOCIAL MEDIA */}


    <section className="p-5 bg-dark text-light">
    <div className="container">

      <div className="
      d-flex flex-column-reverse 
      flex-sm-row justify-content-sm-between
      ">

      <div className="logoAndPolicy text-center text-sm-start">

          <div className="h2 mb-3">Wipster Brother</div>

          <div id='footerPolicy'className="h6 mb-4 text-secondary" onClick={()=> alert('page under construction')} style={{cursor: 'pointer', transition: '0.5s'}}>Privacy Policy &amp; Terms of Service</div>

          <p className='fw-bold'>&copy; {new Date().getFullYear()} Wipster Brother</p>


        {/* end of logoAndPolicy */}
      </div>



      <div className="socialMedia mb-5 d-flex justify-content-center">

        <ul className='d-flex'>
          <li className={footerSocial} onClick={()=> alert('page under development')}><i className="bi bi-facebook h1 mx-2"></i></li>
          <li className={footerSocial} onClick={()=> alert('page under development')}><i className="bi bi-linkedin h1 mx-2"></i></li>
          <li className={footerSocial} onClick={()=> alert('page under development')}><i className="bi bi-instagram h1 mx-2"></i></li>
          <li className={footerSocial} onClick={()=> alert('page under development')}><i className="bi bi-twitter h1 mx-2"></i></li>
          <li className={footerSocial} onClick={()=> alert('page under development')}><i className="bi bi-youtube h1 mx-2"></i></li>
        </ul>



        {/* end of social media */}
      </div>




        {/* end of d-flex */}
      </div>





       {/* end of container */}
    </div>
    </section>


    <section className="p-4 bg-dark">
    <div className="container">




       {/* end of container */}
    </div>
    </section>


        </div>
    )
}

export default Footer
