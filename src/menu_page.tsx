import ExportNav from "./components/ui/nav/export_nav"
import Footer from "./components/ui/nav/footer"
import { useState } from "react"
import { allItems, breakfastItems, dessertItems, drinksItems, mainDishItems } from "./components/lib/menus"
import logos from './assets/images/menu/logo.webp'

interface menuTypes {
    image: string,
    price: string,
    header: string,
    text: string
}

const MenuPage = () => {
    const [menuItems, setMenuItems] = useState<menuTypes[]>(allItems)
    const [showButton, setShowButton] = useState('all')
    

    // change menu based on user selection
    const categorySelection = (category: string) => {
        if (category == 'all') setMenuItems(allItems)
        else if (category == 'breakfast') setMenuItems(breakfastItems)
        else if (category == 'desserts') setMenuItems(dessertItems)
        else if (category == 'drinks') setMenuItems(drinksItems)
        else if (category == 'main') setMenuItems(mainDishItems)

        // control which button is active based on the category
        setShowButton(category)
    }
    
    
  return (
    <main className="flex flex-col min-h-[100vh] font-body gap-12">
        <ExportNav />


        <section className="pt-[110px] items-center justify-center px-8 md:px-12 lg:px-16 flex flex-col gap-4">
            <h1 className="text-6xl font-main tracking-wide font-medium xs:text-4xl">
                Our Menu
            </h1>
            <p className="text-sm font-light tracking-wide text-center w-[100%] md:w-[400px]">
                We believe in serving food that not only delights the senses but also brings people together
            </p>
            <div className="flex gap-4 self-center flex-wrap pt-6">
                <button onClick={() => categorySelection('all')} className={`py-2 text-center text-sm rounded-3xl max-xs:w-[85px] w-[100px] hover:shadow-lg ${showButton == 'all' ? 'bg-[#AD343E] border border-[#AD343E] text-white shadow-lg' : 'border border-gray-300 text-black'}`}>
                    All
                </button>
                <button onClick={() => categorySelection('breakfast')} className={`py-2 text-center text-sm rounded-3xl max-xs:w-[85px] w-[100px] hover:shadow-lg ${showButton == 'breakfast' ? 'bg-[#AD343E] border border-[#AD343E] text-white shadow-lg' : 'border border-gray-300 text-black'}`}>
                    Breakfast
                </button>
                <button onClick={() => categorySelection('main')} className={`py-2 text-center text-sm rounded-3xl max-xs:w-[85px] w-[100px] hover:shadow-lg ${showButton == 'main' ? 'bg-[#AD343E] border border-[#AD343E] text-white shadow-lg' : 'border border-gray-300 text-black'}`}>
                    Main Dishes
                </button>
                <button onClick={() => categorySelection('drinks')} className={`py-2 text-center text-sm rounded-3xl max-xs:w-[85px] w-[100px] hover:shadow-lg ${showButton == 'drinks' ? 'bg-[#AD343E] border border-[#AD343E] text-white shadow-lg' : 'border border-gray-300 text-black'}`}>
                    Drinks
                </button>
                <button onClick={() => categorySelection('desserts')} className={`py-2 text-center text-sm rounded-3xl max-xs:w-[85px] w-[100px] hover:shadow-lg ${showButton == 'desserts' ? 'bg-[#AD343E] border border-[#AD343E] text-white shadow-lg' : 'border border-gray-300 text-black'}`}>
                    Desserts
                </button>
            </div>
        </section>


        <section className={`flex gap-4 flex-wrap py-6 px-8 md:px-12 lg:px-16 gap-y-6 ${showButton == 'all' ? 'justify-between' : ''}`}>
            {
                menuItems.map((item, index) => (
                    <div key={index} className="flex gap-4 flex-col w-[100%] hover:shadow-lg md:w-[250px] border border-gray-300 rounded-xl">
                        <img src={item.image} alt="food" className="w-[100%] h-[150px] rounded-t-xl" />
                        <div className="flex gap-2 px-4 justify-center pb-4 items-center flex-col">
                            <h2 className="text-xl text-[#AD343E] font-semibold">{item.price}</h2>
                            <h2 className="text-lg font-semibold">{item.header}</h2>
                            <p className="text-sm font-normal text-center">{item.text}</p>
                        </div>
                    </div>
                ))
            }
        </section>


        <section className="justify-center px-8 md:px-12 lg:px-16 flex lg:justify-between gap-6 lg:items-center flex-col lg:flex-row">
            <div className="flex flex-col gap-4 w-[100%] lg:w-[350px]">
                <h4 className="text-4xl tablet:5xl leading-10 lg:text-3xl font-main font-medium">
                    You can order through apps
                </h4>
                <p className="text-[1rem] lg:text-[0.9rem] font-light leading-relaxed">
                    We've partnered with popular food delivery apps to make ordering your favorite dishes even easier. Simply download any of the listed apps, browse through our expanded menu, and place your order with just a few taps. Enjoy our delicious meals delivered straight to your door, wherever you are!
                </p>
            </div>
            <div className="w-[100%] lg:w-[700px] ">
                <img src={logos} alt="You can order from any of these apps" className="w-[100%]" />
            </div>
        </section>

        <Footer />
    </main>
  )
}

export default MenuPage