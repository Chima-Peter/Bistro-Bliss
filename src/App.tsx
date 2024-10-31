import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./errorpage"
import HomePage from "./home_page"
import AboutPage from "./about_page"
import MenuPage from "./menu_page"
import BookPage from "./book_page"
import ContactUsPage from "./contact_page"

export function App() {
  return (
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Bistro-Bliss/'}>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path='/menu' element={<MenuPage />} />
            <Route path='/book' element={<BookPage />} />
            <Route path='/contact' element={<ContactUsPage />} />
         </Routes> 
      </BrowserRouter>
  )
}



