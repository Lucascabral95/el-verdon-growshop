import { Routes, Route, Navigate } from "react-router-dom"
// import Main from "../components/Main/Main.js"
import Body from "../components/Body.js"

const PublicRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to={"/"} />} />
                {/* <Route path="/" element={<Main />} /> */}
                <Route path="/" element={<Body />} />
            </Routes>
        </>
    )
}

export default PublicRoutes