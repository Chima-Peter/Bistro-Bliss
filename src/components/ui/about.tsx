import { FiPhone } from 'react-icons/fi'
import { MdMailOutline, MdOutlineLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'
import second_image from '../../assets/images/home_page/second_image.webp'
type Props = {
    link: boolean,
    color: boolean
}

const About = (props: Props) => {
  return (
    <section className={`w-[100%] px-8 md:px-12 lg:px-16 flex flex-col tablet:flex-row justify-between items-center py-16 tablet:gap-4 gap-14 ${props.color ? 'bg-white' : 'bg-[#F8F9F7]'}`}>
        <div className="w-[100%] tablet:w-[400px] relative flex justify-center tablet:justify-start">
        <img src={second_image} alt="picture of food" className="rounded-xl w-[100%] tablet:w-[95%]" />
        <div className="flex-col gap-6 absolute tablet:top-[42%] lg:top-[52%] tablet:right-[0] tablet:p-6 p-8 w-[40%] tablet:w-[300px] rounded-xl bg-[#474747] tablet:flex hidden">
            <h4 className="text-sm text-white">
            Come and visit us
            </h4>
            <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <FiPhone className="w-4 h-4 text-white" />
                <Link className="text-xs text-white" to={'tel:+2348075310346'}>
                    +234 807 531 0346
                </Link>
            </div>
            <div className="flex gap-4">
                <MdMailOutline className="w-5 h-5 text-white" />
                <Link className="text-xs text-white" to={'mailto:bistrobliss@gmail.com'}>
                bistrobliss@gmail.com
                </Link>
            </div>
            <div className="flex gap-4">
                <MdOutlineLocationOn className="w-6 h-6 text-white" />
                <Link className="text-xs text-white" to={'https://www.google.com/maps/dir/?api=1&destination=1234+Sunset+Boulevard,+Los+Angeles,+CA+90026'} target="_blank">
                    1234 Sunset Boulevard, Los Angeles, CA 90026, USA
                </Link>
            </div>
            </div>
        </div>
        </div>
        <div className="flex flex-col gap-6 w-[100%] tablet:w-[40%]">
        <h4 className="text-4xl font-medium font-main">
            We provide healthy food for you and your family.
        </h4>
        <p className="text-sm font-medium">
            Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
        </p>
        <p className="text-sm font-light">
            At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
        </p>
        {
            props.link && (
                <Link to={'/about'} className="py-2 px-4 text-sm rounded-3xl border border-black w-fit">
                    More About Us
                </Link>
            )
        }
        </div>
    </section>
  )
}

export default About