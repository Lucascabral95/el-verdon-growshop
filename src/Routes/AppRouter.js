import { BrowserRouter } from "react-router-dom"
import PublicRoutes from "./PublicRoutes.js"

const AppRouter = () => {

    return (
        <div>
            <BrowserRouter>

                <PublicRoutes />

            </BrowserRouter>

        </div>
    )
}

export default AppRouter