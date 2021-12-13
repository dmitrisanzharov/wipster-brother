import React from 'react'
import Link from 'next/link'

const NavbarLinks = () => {
    return (

                 <ul className={`navbar-nav mb-2 mb-lg-0 ms-auto`}>

<li className="nav-item" onClick={()=> alert('What works on this site: LOGIN LINK, REGISTER LINK, CONTACT US, Start Free Trial Button, you can register and login, and it will bring you to Your Page (just plain text page)')}>
    <a className="nav-link" href="#">WHAT WORKS ON THIS SITE</a>
    </li>

    <li className="nav-item">
    <Link href='/login'>
    <a className="nav-link" href="#">LOGIN</a>
    </Link>
    </li>

    <li className="nav-item">
        <Link href='/newaccount'>
    <a className="nav-link" href="#">REGISTER</a>
       </Link>
    </li>


    <li className="nav-item">
   <Link href='/contactus'>
    <a className="nav-link">
        CONTACT US
    </a>
    </Link>
    </li>
</ul>

    )
}

export default NavbarLinks
