import React, {useEffect} from 'react';
import Link from 'next/link';
import $ from 'jquery';



const SearchAndStartMiniComponent = ({show}) => {


    useEffect(()=> {

        $(document).ready(()=> {

           


            $(window).scroll(()=>{

                let scrollClient = $(window).scrollTop(); 

                if(scrollClient > 100){
                    $('#navBarSearchIcon').removeClass('text-light');
                    $('#navBarSearchIcon').addClass('text-dark');
                }
    


            })

            // end of document ready
        })

    }, [])


    return (
        <div className={show ? `pe-4` : `ms-auto pe-4`}>
                <i id='navBarSearchIcon' className="bi-search text-light mx-4 h3" style={{cursor: 'pointer'}}  onClick={()=> alert('page under development')}></i>
                <button type="button" className="btn btn-success">

                    <Link href='/login'>
                    Start free trial
                    </Link>
                    
                    </button>
        </div>
    )
}

export default SearchAndStartMiniComponent
