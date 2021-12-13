import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import React, {useState, useEffect} from 'react';
import $ from 'jquery';
import SearchAndStartMiniComponent from './SearchAndStartMiniComponent';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {

// STYLES IMPORT

    const {dr, db} = styles; 


// STATES

const [show, setShow] = useState(false); 




//********************************************************************
//          FUNCTIONS AND MINI COMPONENTS
// *******************************************************************

function showSearchAndFreeTrial(){

    let winWidth = $(window).width();
           
    if(winWidth < 991){
        setShow(false)
    }

    if(winWidth > 991){
        setShow(true)
    }



    // end of showSearchAndFreeTrial
}







//********************************************************************
//          useEffect
// *******************************************************************

useEffect(()=> {
   $(document).ready(()=> {
     showSearchAndFreeTrial();

       $(window).resize(e=> {
        showSearchAndFreeTrial();
       })

       $('#navBarLight').hide();

       $(window).scroll(()=> {
           
        let scrollFromTop = $(window).scrollTop();

        if(scrollFromTop < 100){
            $('#navBarLight').hide();
        }
       
        if(scrollFromTop === 101){
            $('#navBarLight').slideDown(500);
        } 

        if(scrollFromTop > 101){
            $('#navBarLight').show();
        }

        
        // end of scroll
       })








    //    end of document ready
   })
}, [])








//********************************************************************
//          HTML CODE
// *******************************************************************


    return (
     <>


<nav className="navbar navbar-expand-lg navbar-light shadow fixed-top" id='navBarLight' style={{backgroundColor: 'rgba(255,255,255,0.8'}}>

 
 
 <div className={`container-fluid px-4 py-2`}>
   
     <Link href='/'>
         <div className="navbar-brand h1" style={{cursor: 'pointer'}}>Wipster Brother</div>
     </Link>
 
     {!show && <SearchAndStartMiniComponent />}
 
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
     </button>


   <div className="collapse navbar-collapse" id="navbarSupportedContent">
 
    {/* NavBarLinks should go here */}
    <NavbarLinks />

     {show && <SearchAndStartMiniComponent show={show}/>}


        




        {/* end of collapsable */}
     </div>
 
 
     {/* end of container div */}
 </div>
 </nav>




     </>

            
       
    )
}

export default Navbar
