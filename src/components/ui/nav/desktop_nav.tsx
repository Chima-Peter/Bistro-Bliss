import { Link, NavLink } from "react-router-dom"
import icon from '../../../assets/images/icon.png'


const DesktopNav = () => {
  return (
    <nav className="w-[100%] px-16 py-6 flex justify-between items-center font-header font-body fixed font-medium border-b bg-white border-gray-400">
    <Link to={'/'} className="flex items-center gap-1">
        <img src={icon} alt="logo" className="w-8 h-8" />
        <h1 className="font-main italic text-[26px] font-semibold tracking-wide">
            Bistro Bliss
        </h1>
    </Link>
      <ul className="flex gap-4 items-center">
        <li className="text-[14px] cursor-pointer p-2">
          <NavLink to={'/'} className={`px-4 py-2`}>
            Home
          </NavLink>
        </li>
        <li className="text-[14px] cursor-pointer p-2">
          <NavLink to={'/about'} className={`px-4 py-2`}>
            About
          </NavLink>
        </li>
        <li className="text-[14px] cursor-pointer p-2">
          <NavLink to={'/menu'} className={`px-4 py-2`}>
            Menu
          </NavLink>
        </li>
        <li className="text-[14px] cursor-pointer p-2">
          <NavLink to={'/book'} className={`px-4 py-2`}>
            Contact Us
          </NavLink>
        </li>
      </ul>
      <Link to={'/book'} className="py-2 px-4 text-sm rounded-3xl border border-black">
        Book A Table
      </Link>
    </nav>
  )
}

export default DesktopNav