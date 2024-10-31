import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./errorpage"
import HomePage from "./home"
import AboutPage from "./about_page"
import Menu from "./menu"

export function App() {
  return (
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Bistro-Bliss/'}>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path='/menu' element={<Menu />} />
         </Routes> 
      </BrowserRouter>
  )
}



