import React,{useState} from 'react'
import {SiConsul} from 'react-icons/si'
import {BiSupport} from 'react-icons/bi'
import {FaLanguage} from 'react-icons/fa'
import {CgMenuGridO} from 'react-icons/cg'
import logo from '../../assets/logo.png'

const Navbar = () => {

    const [active, setActive] = useState('navBarMenu')
    const showNavBar = ()=>{
        setActive('navBarMenu showNavBar')
    }

    const removeNavBar = () => {
        setActive('navBarMenu')
    }


    
    const[noBg, addBg]= useState('navBarTwo')
    const addBgcolor = () => {
        if(window.scrollY >= 10){
          addBg('navBarTwo navbar_with_Bg')
        }else{
          addBg('navBarTwo')

        }

    }

window.addEventListener(scroll , addBgcolor)

  return (
    <div className='navBar flex'>
      <div className="navBarOne flex">
        <div>
        <SiConsul className='icon'/>
        </div>

        <div className='None flex'>
            <li className='flex'> <BiSupport/> Support</li>
            <li className='flex'> <FaLanguage/> Languages</li>
        </div>
    
        <div className="atb flex">

            <span>Sign In</span>
            <span>Sign Out</span>
        </div>
    
    
    
    
          <div className={noBg}>

             <div className="LogoDiv">
              <img src={logo}  className='Logo' /> 
             </div>
                
               <div className={active}>
                 <ul className="menuflex">

                   <li onClick={removeNavBar} className="listItem">Home</li>
                   <br/>
                   <li onClick={removeNavBar} className="listItem">About</li>
                   <br/>
                   <li onClick={removeNavBar} className="listItem">Offers</li>
                   <br/>
                   <li onClick={removeNavBar} className="listItem">Seats</li>
                   <br/>
                   <li onClick={removeNavBar} className="listItem">Desinations</li>

                 </ul>

                   <button className='btn flex btnOne'>
                     contact
                   </button>
                </div>
                   <div onClick={showNavBar} className='toggleIcon'>
                   <CgMenuGridO className='icon'/>

                   </div>

               </div>

            </div>
      </div>      
    
  
  )
}

export default Navbar