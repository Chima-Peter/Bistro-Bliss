import About from "./components/ui/about"
import ExportNav from "./components/ui/nav/export_nav"
import Footer from "./components/ui/nav/footer"
import info_image from './assets/images/about_page/info_image.webp'
import Reviews from "./components/ui/reviews"

const AboutPage = () => {
    const section2 = [
        {
            header: 'Multi-Cuisine',
            text: 'We believe in providing the best possible dining experience for our customers through our diverse menu.'
        },
        {
            header: 'Top-Notch Staff',
            text: 'Our friendly and attentive staff is always ready to help you find the perfect dining experience.'
        },
        {
            header: 'Affordable Prices',
            text: 'At Bistro Bliss, we strive to provide the best possible prices with perfect dining experience.'
        }
    ]


  return (
    <main className="font-body flex flex-col gap-12">
        <ExportNav />


        <section className="flex flex-col gap-12 pt-[60px]">
            <div className="w-[100%] bg-[url('./assets/images/about_page/BG.webp')] h-[690px] flex items-center justify-center ">
                <p className="font-main font-regular text-4xl text-center md:text-left md:w-[550px] tracking-wide leading-12 w-[90%] text-white">
                    Feel the authentic original taste from us.
                </p>
            </div>
            <div className="flex gap-4 justify-between px-8 md:px-12 lg:px-16 flex-col md:flex-row">
                {
                    section2.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2 w-[100%] md:w-[250px]">
                            <h2 className="font-semibold text-xl">{item.header}</h2>
                            <p className="leading-6 font-light text-sm">{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </section>
        

        <About link={false} color={true} />

        <section className="bg-[#F9F9F7] flex px-8 md:px-12 py-12 lg:px-16 lg:justify-between lg:items-center flex-col-reverse lg:flex-row gap-12 lg:gap-0">
            <div className="flex flex-col gap-4 w-[100%] lg:w-[400px]">
                <h2 className="text-4xl w-[100%] md:w-[350px]">
                    A little information for our valuable guests
                </h2>
                <p className="text-sm font-extralight leading-6 tracking-wide">
                    At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 justify-between lg:justify-normal">
                        <div className="flex flex-col items-center justify-center w-[50%] lg:w-[200px] gap-2 h-[120px] bg-white border border-gray-200 rounded-xl">
                            <h3 className="text-3xl font-semibold font-main">3</h3>
                            <p className="font-light text-xs">Locations</p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[50%] lg:w-[200px] gap-2 h-[120px] bg-white border border-gray-200 rounded-xl">
                            <h3 className="text-3xl font-semibold font-main">1995</h3>
                            <p className="font-light text-xs">Founded</p>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-between lg:justify-normal">
                        <div className="flex flex-col items-center justify-center w-[50%] lg:w-[200px] gap-2 h-[120px] bg-white border border-gray-200 rounded-xl">
                            <h3 className="text-3xl font-semibold font-main">65+</h3>
                            <p className="font-light text-xs">Staff Members</p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[50%] lg:w-[200px] gap-2 h-[120px] bg-white border border-gray-200 rounded-xl">
                            <h3 className="text-3xl font-semibold font-main">100%</h3>
                            <p className="font-light text-xs">Customers</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={info_image} alt='chef cooking' className="rounded-xl h-[400px] md:h-[500px] w-[100%] lg:w-auto" />
            </div>
        </section>


        <Reviews header="What Our Customers Say" />


        <Footer />
    </main>
  )
}

export default AboutPage