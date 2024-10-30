import { Link } from 'react-router-dom'
import desktopImage from './assets/images/desktop/404-error.webp'
import tabletImage from './assets/images/tablet/404-error.webp'
import mobileImage from './assets/images/mobile/404-error.webp'

const ErrorPage = () => {
   return (
      <div className='flex items-center justify-center bg-white w-full h-screen lg:h-auto md:h-auto'>
         <Link to={'/'}>
            <img 
               src={desktopImage} 
               srcSet={`${mobileImage} 300w, ${tabletImage} 600w, ${desktopImage} 1200w`} 
               sizes='(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px' 
               alt="ERROR PAGE" 
               rel='preload' />
         </Link>
      </div>
   )
}

export default ErrorPage