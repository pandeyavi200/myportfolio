import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {MdMenu,MdClose} from 'react-icons/md'; 


const NavMenu=()=>{
   const [ShowNav, setShowNav] = useState(false);
   const [navbar,setNavbar] = useState(false);
//    const callclose=()=>{
//        setShowNav(true);
//    }
   const changeBackground=()=>{
       console.log(window.scrollY);
       if(window.scrollY >= 80){
        setNavbar(true); 
       }
       else{
        setNavbar(false);
       }
   }
   window.addEventListener('scroll',changeBackground);
   return(
       <>
       <div>
     <div className="Nav_back">
      <div className={navbar? 'mobile-menu-icon active':'mobile-menu-icon'}>
         <MdMenu onClick={() => setShowNav(!ShowNav)} 
         role="button" onKeyDown={() => setShowNav(!ShowNav)}
         tabIndex={0}  />
      </div>
     <ul className={!navbar ? !ShowNav ? 'navItems hide-item' : 'navItems':!ShowNav ? 'navItems hide-item active' : 'navItems active' }  >
         <div className="nav-close-icon" 
         onClick={() => setShowNav(!ShowNav)} 
         role="button" onKeyDown={() => setShowNav(!ShowNav)}
         tabIndex={0} >
            <MdClose/> 
         </div>
             <li className="li">
               <NavLink className="nav" activeClassName="active" exact to="/" 
               onClick={() => setShowNav(!ShowNav)} 
         role="button" onKeyDown={() => setShowNav(!ShowNav)}
         tabIndex={0} >Home</NavLink>
             </li>
             <li className="li">
               <NavLink className="nav" activeClassName="active" to="/about" 
               onClick={() => setShowNav(!ShowNav)} 
         role="button" onKeyDown={() => setShowNav(!ShowNav)}
         tabIndex={0} >About</NavLink>
             </li>
             <li className="li">
               <NavLink className="nav" activeClassName="active" to="/projects" 
               onClick={() => setShowNav(!ShowNav)} 
         role="button" onKeyDown={() => setShowNav(!ShowNav)}
         tabIndex={0} >Projects</NavLink>
             </li>
             <li className="li">
                <NavLink className="nav" activeClassName="active" to="/contact" 
                onClick={() => setShowNav(!ShowNav)} 
         role="button" onKeyDown={() => setShowNav(!ShowNav)}
         tabIndex={0} >Contact</NavLink>
             </li>
         </ul>
     </div>
     </div>
       </>
   )
}
export default NavMenu;