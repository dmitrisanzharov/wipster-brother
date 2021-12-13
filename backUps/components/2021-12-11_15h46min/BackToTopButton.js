import React, {useEffect} from 'react'
import $ from 'jquery';

const BackToTopButton = () => {

    function hideAndUnhideTheBackToTopButton(){

        $(document).ready(()=> {
      
          // $('#test1').hide();
      
          $('#backToTopButton').hide();
      
          $(window).scroll(()=> {
           
              let scrollSize = $(window).scrollTop();
              
      
              if(scrollSize > 10){
                $('#backToTopButton').show();
              } else {
                $('#backToTopButton').hide();
              }
      
      
          })
      
          // end of document ready
        })
      
      
        // end of hideAndUnhideTheBackToTopButton
      }




    useEffect(()=> {
        hideAndUnhideTheBackToTopButton();
    }, [])

    return (
        <div>
                <div id='backToTopButton'>
    <a href="#top" className="position-fixed bottom-0 start-0 d-flex justify-content-center align-items-center text-light" style={{background: 'rgba(123,123,123, 0.7)', height: '60px', width: '60px', borderRadius: '50px', marginLeft: '20px', marginBottom: '20px', zIndex: '10'}}>
            <i className="bi bi-chevron-up h2"></i>
        </a>
    </div>
        </div>
    )
}

export default BackToTopButton
