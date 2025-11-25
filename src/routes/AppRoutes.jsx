import { Routes, Route } from "react-router-dom";
//Site
import Home from "../pages/site/Home";
import NotFound from "../pages/site/NotFound";

export default function AppRoutes () {
    return (
        <Routes>
            {/*Rotas do site */}
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
