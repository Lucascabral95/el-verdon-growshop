import { Routes, Route, Navigate } from "react-router-dom"
import Header from "../components/Header/Header.js"
import Footer from "../components/Footer/Footer.js"

const PublicRoutes = () => {

    return (
        <>
            <Header />
               <Routes>
                  <Route path="*" element={<Navigate to={"/"} />} />
               </Routes>
            <Footer />
        </>
    )
}

export default PublicRoutes