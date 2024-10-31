import { Link } from 'react-router-dom';
import icon from '../../../assets/images/icon.webp'
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import grid1 from '../../../assets/images/grid1.webp'
import grid2 from '../../../assets/images/grid2.webp'
import grid3 from '../../../assets/images/grid3.webp'
import grid4 from '../../../assets/images/grid4.webp'

const Footer = () => {
    const pages = [ 'home', 'about', 'menu', 'contact' ]
  return (
    <footer className="bg-[#474747] text-white mt-[30px] flex px-8 lg:px-16 justify-between font-body py-6 lg:py-12 w-[100%] flex-col gap-6 lg:gap-0 lg:flex-row pb-12">
        <section className='flex gap-5 flex-col items-start border-b-2 border-b-white pb-4 lg:border-0 lg:pb-0'>
            <div className='flex gap-2 items-center'>
                <img src={icon} alt="logo" className='w-8 h-8' />
                <h6 className='font-main font-semibold italic text-2xl'>
                    Bistro Bliss
                </h6>
            </div>
            <p className='text-[#ADB29E] text-sm w-[100%] lg:w-[250px] font-light'>
                In the era of technology, we look forward to the future with certainty and pride in our company.
            </p>
            <div className='flex gap-3'>
                <Link to={'/'} className='p-2 rounded-2xl bg-[#AD343E]'>
                    <FaFacebookF className='w-3 h-3' />
                </Link>
                <Link to={'/'} className='p-2 rounded-2xl bg-[#AD343E]'>
                    <FaXTwitter className='w-3 h-3' />
                </Link>
                <Link to={'/'} className='p-2 rounded-2xl bg-[#AD343E]'>
                    <FaInstagram className='w-3 h-3' />
                </Link>
            </div>
        </section>
        <section className='flex flex-col gap-5 border-b-2 border-b-white pb-4 lg:border-0 lg:pb-0'>
            <h5 className='font-medium text-lg'>
                Pages
            </h5>
            <ul className='p-0 m-0 flex flex-col md:flex-row lg:flex-col gap-2 md:gap-4 lg:gap-2'>
                {
                    pages.map((item) => (
                        <li key={item}>
                            <Link to={`/${item}`} className='capitalize text-[#DBDFD0] text-sm font-light'>
                                {item}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
        <section className='flex-col gap-5 flex'>
            <h5 className='font-medium text-lg'>
                Follow Us On Instagram
            </h5>
            <div className='flex md:flex-row lg:flex-col gap-4 lg:gap-3'>
                <div className='flex gap-4 lg:gap-0 lg:justify-between'>
                    <Link to={'/'}>
                        <img src={grid1} alt="image of food" className='w-30 lg:w-20 h-30 lg:h-20 rounded-lg' />
                    </Link>
                    <Link to={'/'}>
                        <img src={grid2} alt="image of food" className='w-30 lg:w-20 h-30 lg:h-20 rounded-lg' />
                    </Link>
                </div>
                <div className='flex gap-4 lg:gap-0 lg:justify-between'>
                    <Link to={'/'}>
                        <img src={grid3} alt="image of food" className='w-30 lg:w-20 h-30 lg:h-20 rounded-lg' />
                    </Link>
                    <Link to={'/'}>
                        <img src={grid4} alt="image of food" className='w-30 lg:w-20 h-30 lg:h-20 rounded-lg' />
                    </Link>
                </div>
            </div>
        </section>
    </footer>
  )
}

export default Footer