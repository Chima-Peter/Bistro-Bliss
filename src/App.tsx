import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./errorpage"
import HomePage from "./home"
export function App() {
  return (
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Bistro-Bliss/'}>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
         </Routes> 
      </BrowserRouter>
  )
}



