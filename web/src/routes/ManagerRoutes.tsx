import {Route, Routes} from "react-router"
import { Dashboard } from "../pages/Dashboard"
import { AppLayout } from "../components/AppLayout"
import { Refound } from "../pages/Refund"

export function ManagerRoutes(){
    return(
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/refund/:id" element={<Refound/>}/>
            </Route>
        </Routes>
    )
}

    