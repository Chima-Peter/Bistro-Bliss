import ExportNav from "./components/ui/nav/export_nav"
import Footer from "./components/ui/nav/footer"
import { Link } from "react-router-dom"
import { MdFreeBreakfast } from "react-icons/md";
import { GiBerriesBowl, GiCakeSlice } from "react-icons/gi";
import { RiDrinks2Fill, RiPriceTag2Line } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline, MdOutlineLocationOn } from "react-icons/md";
import second_image from './assets/images/second_image.webp'
import third_image from './assets/images/kebab.webp'
import fourth_image from './assets/images/female.webp'
import fifth_image from './assets/images/man-wife.webp'
import sixth_image from './assets/images/friends.webp'
import seventh_image from './assets/images/chef.webp'
import eight_image from './assets/images/curry.webp'
import ninth_image from './assets/images/pot.webp'
import Reviews from "./components/ui/reviews";


const HomePage = () => {
  const browseMenu = [
    {
      image: <MdFreeBreakfast className="w-8 h-8" />,
      header: "Breakfast",
      paragraph: 'Kickstart your day with a satisfying breakfast at Bistro Bliss. Enjoy classics like fluffy pancakes, buttery croissants, and hearty omelets, paired with fresh coffee or juice to start your morning right.'
    },
    {
      image: <GiBerriesBowl className="w-8 h-8" />,
      header: 'Main Dishes',
      paragraph: 'Our main dishes offer a balance of flavor and freshness, with options from grilled steak to vibrant vegetarian dishes. Each plate is crafted to deliver a delightful and memorable dining experience.'
    },
    {
      image: <RiDrinks2Fill className="w-8 h-8" />,
      header: 'Drinks',
      paragraph: 'Unwind with our selection of drinks, from handcrafted cocktails and fine wines to refreshing non-alcoholic options. Perfectly paired with your meal or enjoyed on their own.'
    },
    {
      image: <GiCakeSlice className="w-8 h-8" />,
      header: 'Desserts',
      paragraph: 'End your meal with a sweet treat, from velvety chocolate cake to light fruit tarts. Each dessert is crafted to bring the perfect finishing touch to your dining experience.'
    }
  ]

  const services = [
    {
      image: third_image,
      header: 'Caterings',
      paragraphs: 'Bring the flavors of Bistro Bliss to your next event with our catering services, tailored to meet any occasion'
    },
    {
      image: fourth_image,
      header: 'Birthdays',
      paragraphs: 'Make your birthday celebration unforgettable with a custom menu and festive atmosphere that’s all about you.'
    },
    {
      image: fifth_image,
      header: 'Weddings',
      paragraphs: 'Celebrate your special day with unforgettable cuisine and elegant presentation, designed to make your wedding truly memorable.'
    },
    {
      image: sixth_image,
      header: 'Events',
      paragraphs: 'Create a memorable dining experience for your guests with our group and event planning services'
    }
  ]
  return (
    <main className="font-body flex flex-col gap-12">
      <ExportNav />
        <section className="bg-[url('./assets/images/first_image.webp')] relative w-[100%] h-[100vh] flex items-center flex-col justify-center gap-8 lg:gap-6">
          <h2 className="font-main leading-[54px] font-[100] text-[70px] w-[95%] md:w-[500px] text-center tracking-wider">
            Best food for your taste
          </h2>
          <p className="text-lg w-[90%] md:w-[500px] tracking-wide text-center">
            Discover delectable cuisines and unforgettable moments in our welcoming, culinary haven.
          </p>
          <div className="flex gap-4 lg:gap-2">
            <Link to={'/book'} className="py-2 px-4 text-sm text-white rounded-3xl border border-[#AD343E] bg-[#AD343E]">
              Book A Table
            </Link>
            <Link to={'/book'} className="py-2 px-4 text-sm rounded-3xl border border-black text-black bg-white">
              Explore Menu
            </Link>
          </div>
          <div className="w-[100%] h-[100vh] opacity-15 lg:opacity-20 bg-black top-0 left-0 absolute">
          </div>
        </section>


        <section className="flex flex-col gap-8 px-8 md:px-12 lg:px-16">
          <h3 className="text-3xl self-center font-main font-medium">
            Browse Our Menu
          </h3>
          <div className="flex gap-8 justify-between w-[100%] flex-col flex-wrap lg:justify-center md:flex-row">
            {
              browseMenu.map((item, index) => (
                <div key={index} className="flex w-[100%] tablet:w-[350px] justify-between gap-4 hover:shadow-md border border-gray-300 rounded-xl py-4 px-6 flex-col items-center">
                  <div className="rounded-full p-4 bg-gray-100">
                    {item.image}
                  </div>
                  <h3 className="font-semibold text-xl">{item.header}</h3>
                  <p className="text-justify font-light text-sm tracking-wider leading-6 ">{item.paragraph}</p>
                  <Link className="font-semibold text-sm text-[#AD343E] self-center" to={'/menu'}>
                    Explore Menu
                  </Link>
                </div>
              ))
            }
          </div>
        </section>


        <section className="bg-[#F9F9F7] w-[100%] px-8 md:px-12 lg:px-16 flex flex-col tablet:flex-row justify-between items-center py-16 tablet:gap-8 gap-14">
          <div className="w-[100%] tablet:w-[400px] lg:w-[500px] relative flex justify-center tablet:justify-start">
            <img src={second_image} alt="picture of food" className="rounded-xl w-[100%] tablet:w-[95%]" />
            <div className="flex-col gap-6 absolute tablet:top-[50%] lg:top-[60%] tablet:right-[0] tablet:p-6 p-8 w-[40%] tablet:w-[300px] rounded-xl bg-[#474747] tablet:flex hidden">
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
                  <Link className="text-xs text-white" to={'https://www.google.com/maps/search/?api=1&query=837+W.+Marshall+Lane,+Marshalltown,+IA+50158'} target="_blank">
                    837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
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
            <Link to={'/book'} className="py-2 px-4 text-sm rounded-3xl border border-black w-fit">
              More About Us
            </Link>
          </div>
        </section>


        <section className="flex flex-col gap-10 py-12 px-8 md:px-12 lg:px-16">
          <h4 className="font-main font-medium w-[100%] md:w-[350px] text-3xl">
            We also offer unique services for your events
          </h4>
          <div className="flex flex-col flex-wrap lg:flex-nowrap md:flex-row gap-8 md:gap-8 justify-between">
            {
              services.map((service, index) => (
                <div key={index} className="flex w-[100%] md:w-[250px] gap-3 flex-col">
                  <img src={service.image} alt={service.header} className="w-[100%] md:w-[250px] rounded-xl h-[250px] hover:shadow-xl hover:shadow-gray-400" />
                  <h3 className="font-semibold text-xl">{service.header}</h3>
                  <p className="flex gap-4 text-sm leading-5 font-light">
                    {service.paragraphs}
                  </p>
                </div>
              ))
            }
          </div>
        </section>


        <section className="flex flex-col tablet:flex-row px-8 md:px-12 lg:px-16 py-16 gap-10 tablet:gap-24 items-center bg-[#F9F9F7]">
          <div className="flex gap-4 w-[100%] tablet:w-fit">
            <img src={seventh_image} className="w-auto tablet:w-[280px] h-[420px]" alt="our chef" />
            <div className="flex pt-2 flex-col self-end w-[100%] tablet:w-[fit] gap-4 mt-2">
              <img src={eight_image} alt="curry sauce" className="w-auto tablet:w-[250px] h-[200px]" />
              <img src={ninth_image} alt="pot of rice" className="w-auto tablet:w-[250px] h-[200px]" />
            </div>
          </div>
          <div className="w-[100%] tablet:w-[300px] flex flex-col gap-4">
            <h5 className="font-main text-3xl font-medium">
              Fastest food delivery in the city
            </h5>
            <p className="text-xs font-extralight">
              Get your food delivered to you in record time without having to wait for long hours.
            </p>
            <ul className="flex flex-col gap-2 pt-2">
              <li className=" flex gap-3 items-center">
                <div className="p-2 bg-[#AD343E] rounded-full w-fit">
                  <CiDeliveryTruck className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm font-medium">
                  Delivery within 30 minutes
                </p>
              </li>
              <li className=" flex gap-3 items-center">
                <div className="p-2 bg-[#AD343E] rounded-full w-fit">
                  <RiPriceTag2Line className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm font-medium">
                  Best Offer & Prices
                </p>
              </li>
              <li className=" flex gap-3 items-center">
                <div className="p-2 bg-[#AD343E] rounded-full w-fit">
                  <IoCartOutline className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm font-medium">
                  Online Services Available
                </p>
              </li>
            </ul>
          </div>
        </section>


        <Reviews header="What Our Customers Say" />
      <Footer />
    </main>
  )
}

export default HomePage
