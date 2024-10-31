import ExportNav from "./components/ui/nav/export_nav"
import Footer from "./components/ui/nav/footer"
import { RiArrowDropDownLine } from "react-icons/ri";


const BookPage = () => {
  return (
    <main className="flex flex-col min-h-[100vh] font-body gap-14">
        <ExportNav />

        <section className="pt-[110px] items-center justify-center px-8 md:px-12 lg:px-16 md:pb-20 flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl font-main tracking-wide font-medium xs:text-4xl">
                Book A Table
            </h1>
            <p className="text-sm font-light tracking-wide text-center w-[100%] md:w-[650px]">
                Reserve your table with ease using our online booking system. Whether you're planning a special occasion or a casual meal, simply select your preferred date and time, and we'll have everything ready for your arrival. Enjoy a seamless dining experience from the moment you book to the moment you leave.
            </p>
        </section>


        <section className="relative flex flex-col gap-8">
            <form className="flex flex-col gap-6 bg-white rounded-xl p-8 shadow-2xl shadow-gray-300 md:border w-[100%] md:w-[600px] md:absolute md:left-[50%] md:translate-x-[-50%] md:translate-y-[-38%]">
                <div className="flex gap-4 flex-col md:flex-row justify-between">
                    <label htmlFor="date" className="flex items-start gap-2 flex-col text-sm font-medium">
                        Date
                        <input type="date" name="date" id="date" className="w-[100%] font-light md:w-[250px] py-2 px-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-2 focus:shadow-md" />
                    </label>
                    <label htmlFor="time" className="flex items-start gap-2 flex-col text-sm font-medium">
                        Time
                        <input type="time" name="time" id="time" className="w-[100%] font-light md:w-[250px] py-2 px-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-2 focus:shadow-md" />
                    </label>
                </div>
                <div className="flex gap-4 flex-col md:flex-row justify-between">
                    <label htmlFor="name" className="flex items-start gap-2 flex-col text-sm font-medium">
                        Name
                        <input type="text" name="name" autoComplete="off" autoFocus id="name" className="w-[100%] md:w-[250px] py-2 px-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-2 focus:shadow-md text-[16px] placeholder:text-sm placeholder:text-gray-700 font-light" />
                    </label>
                    <label htmlFor="phone"  className="flex items-start gap-2 flex-col text-sm font-medium">
                        Phone
                        <input type="tel" name="phone" autoComplete="off" id="phone" className="w-[100%] md:w-[250px] py-2 px-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-2 focus:shadow-md text-[16px] placeholder:text-sm placeholder:text-gray-700 font-light" />
                    </label>
                </div>
                <label htmlFor="total" className="flex items-start gap-2 relative flex-col text-sm font-medium">
                    Total Person
                    <select name="total" id="total" className="w-[100%] py-2 appearance-none cursor-pointer px-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-2 focus:shadow-md" >
                        <option value="1 Person">1 Person</option>
                        <option value="2 Persons">2 Persons</option>
                        <option value="3 Persons">3 Persons</option>
                        <option value="4 Persons">4 Persons</option>
                        <option value="5 Persons">5 Persons</option>
                    </select>
                    <RiArrowDropDownLine className="w-7 h-7 absolute top-8 right-2 cursor-pointer" />
                </label>
            </form>

            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.458346065713!2d-118.2654312847819!3d34.09020368060735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7cfa774c577%3A0xfec1ae4fbcdb84c2!2s1234%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sus!4v1698689000195!5m2!1sen!2sus" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                
                className="w-[100%] h-[600px]">
            </iframe>
        </section>


        <Footer />
    </main>
  )
}

export default BookPage