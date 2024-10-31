import { useState } from "react";
import ExportNav from "./components/ui/nav/export_nav"
import Footer from "./components/ui/nav/footer"
import validator from 'validator'
import { Link } from "react-router-dom";

const ContactUsPage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [text, setText] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value })
        setText('')
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // submit the form to your server here
            if (!validator.isEmpty(form.name) && !validator.isEmail(form.email) && !validator.isEmpty(form.subject) && !validator.isEmpty(form.message)) {
                setText(`Thanks for reaching out to us. Expect a feedback soonest on ${new Date(form.email).toLocaleDateString()}!`)
            setForm({
                name: '',
                email: '',
                subject: '',
                message: '',
            })
        } else {
            setText('Please fill out all required fields.')
        }
    }


  return (
    <main className="flex flex-col min-h-[100vh] font-body gap-8 md:gap-0">
        <ExportNav />

        <section className="pt-[110px] items-center justify-center px-8 md:px-12 lg:px-16 md:pb-48 bg-[#F9F9F7] flex flex-col pb-16 gap-4">
            <h1 className="text-4xl md:text-6xl font-main tracking-wide font-medium xs:text-4xl">
                Contact Us
            </h1>
            <p className="text-sm font-light tracking-wide text-center w-[100%] md:w-[650px]">
                Get in touch with us! Whether you’re planning a special event, have a question about our menu, or simply want to make a reservation, we’re here to help. Our team is dedicated to making your dining experience exceptional from start to finish. Reach out to us by phone, email, or visit us in person—we can’t wait to welcome you!
            </p>
        </section>


        <section className="flex flex-col gap-8 relative mb-12">
            <form className="flex font-body flex-col gap-6 bg-white rounded-xl p-8 md:shadow-md md:shadow-gray-300 md:border w-[100%] md:w-[600px] md:absolute md:left-[50%] md:translate-x-[-50%] md:translate-y-[-35%]" noValidate onSubmit={handleSubmit}>
                <div className="flex gap-4 flex-col md:flex-row justify-between">
                    <label htmlFor="name" className="flex items-start gap-2 flex-col text-sm font-medium">
                        Name
                        <input onChange={handleInputChange} placeholder="Enter your name" value={form.name} type="text" name="name" autoComplete="off" autoFocus id="name" className="capitalize w-[100%] md:w-[250px] py-2 px-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-2 text-[16px] placeholder:text-sm placeholder:text-gray-700 font-light" />
                    </label>
                    <label htmlFor="email"  className="flex items-start gap-2 flex-col text-sm font-medium">
                        Email
                        <input onChange={handleInputChange} placeholder="Enter your email" value={form.email} type="email" name="email" autoComplete="off" id="email" className="w-[100%] md:w-[250px] py-2 px-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-2 text-[16px] placeholder:text-sm placeholder:text-gray-700 font-light" />
                    </label>
                </div>
                <label htmlFor="text"  className="flex items-start gap-2 flex-col text-sm font-medium">
                    Subject
                    <input onChange={handleInputChange} placeholder="Enter your subject" value={form.subject} type="email" name="email" autoComplete="off" id="email" className="w-[100%] py-2 px-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-2 text-[16px] placeholder:text-sm placeholder:text-gray-700 font-light" />
                </label>
                <label htmlFor="message">
                    Message
                    <textarea name="message" id="message" className="w-[100%] rounded-xl  py-2 px-4 border border-gray-300 focus:outline-none focus:border-2 text-[16px] placeholder:text-sm placeholder:text-gray-700 font-light"></textarea>
                </label>
                <button type="submit" className="w-[100%] text-sm text-center border-[#AD343E] bg-[#AD343E] py-2 text-white rounded-2xl">
                    Send
                </button>
                <p className="text-sm font-medium tracking-wide leading-6 self-center text-[#AD343E]">
                    {text}
                </p>
            </form>

            <div className="flex gap-8 md:gap-14 self-center md:mt-[330px] flex-col md:flex-row">
                <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold">
                        Call Us:
                    </h3>
                    <Link className="text-[1rem] font-semibold text-[#AD343E]" to={'tel:+2348075310346'}>
                        +234 807 531 0346
                    </Link>
                </div>
                <div className="flex flex-col gap-2 w-[100%] md:w-[150px]">
                    <h3 className="text-sm font-medium">
                        Hours:
                    </h3>
                    <p className="text-sm font-light">
                        Mon-Fri: 11am - 8pm Sat, Sun: 9am - 10pm
                    </p>
                </div>
                <div className="flex flex-col gap-2 w-[100%] md:w-[150px]">
                    <h3 className="text-sm font-medium">
                        Our Location:
                    </h3>
                    <Link className="text-sm font-light" to={'https://www.google.com/maps/dir/?api=1&destination=1234+Sunset+Boulevard,+Los+Angeles,+CA+90026'} target="_blank">
                        1234 Sunset Boulevard, Los Angeles, CA 90026, USA
                    </Link>
                </div>
            </div>
        </section>


        <Footer />
    </main>
  )
}

export default ContactUsPage
