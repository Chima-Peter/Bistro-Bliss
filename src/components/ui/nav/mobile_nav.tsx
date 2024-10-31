import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { motion } from 'framer-motion'
import { MdCancelPresentation } from "react-icons/md";
import iconImage from '../../../assets/images/icon.webp'

function MobileNav() {
   const [icon, setIcon] = useState(true)

   const [scroll, setScroll] = useState(false)


   useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
   })

   // function to open or close hamburger menu
   const handleIcon = () => {
      setIcon(!icon)
   }

   // set state based on scroll event
   const handleScroll = () => {
    setScroll(window.scrollY > 0)
   }

   // animation slide in effects for menu
   const slideVariants = {
      initial: {
         y: '-10%',
         opacity: 0
      },
      animate: {
         y: 0,
         opacity: 1
      }
   }


   return (
      <nav className={`flex flex-col bg-white py-4 px-2 text-black w-full gap-4 fixed z-10 ${!icon ? 'bg-white h-[100%] overflow-hidden border-b-0' : ''} ${scroll ? 'shadow-md shadow-gray-100' : ''}`}>
         <div className="flex w-full justify-between items-center py-2 md:py-5 px-4 md:px-8 lg:px-12">
         <  Link to={'/'} className="flex items-center gap-1">
                <img src={iconImage} alt="logo" className="w-6 h-6" />
                <h1 className="font-main font-semibold italic text-xl tracking-wide">
                    Bistro Bliss
                </h1>
            </Link>
               {
                  icon && <GiHamburgerMenu className="w-7 h-7 cursor-pointer" onClick={handleIcon} />
               }
               {
                  !icon && <MdCancelPresentation className="w-7 h-7 cursor-pointer" onClick={handleIcon} />
               }
         </div>
         {   
            !icon &&                
               <motion.ul 
                  className='text-xs font-medium flex box-border w-[100%] flex-col gap-6 py-4'
                  variants={slideVariants}
                  initial='initial'
                  animate='animate'
                  transition= {{
                        ease: 'linear',
                        duration: 0.3
                  }}>
                    <li className="text-[14px] ml-6 cursor-pointer">
                        <NavLink to={'/'}>
                            Home
                        </NavLink>
                    </li>
                    <li className="text-[14px] ml-6 cursor-pointer">
                        <NavLink to={'/about'}>
                            About
                        </NavLink>
                    </li>
                    <li className="text-[14px] ml-6 cursor-pointer">
                        <NavLink to={'/menu'}>
                            Menu
                        </NavLink>
                    </li>
                    <li className="text-[14px] ml-6 cursor-pointer">
                        <NavLink to={'/contact'}>
                            Contact Us
                        </NavLink>
                    </li>
                    <Link to={'/book'} className="text-sm ml-5 rounded-3xl w-fit border-gray-400 px-4 py-2 border">
                        Book A Table
                    </Link>
               </motion.ul>
         }
      </nav>
   )
}

export default MobileNav