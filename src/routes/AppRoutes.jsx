import { Routes, Route } from "react-router-dom";
//Site
import Home from "../pages/site/Home";
import NotFound from "../pages/site/NotFound";

//Autenticação
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

//Super Admin
import DashboardAdmin from "../pages/superadmin/DashboardAdmin";
import CondominiosAdmin from "../pages/superadmin/CondominiosAdmin";
import MoradoresAdmin from "../pages/superadmin/MoradoresAdmin";
import CobrancasAdmin from "../pages/superadmin/CobrancasAdmin";
import OcorrenciasAdmin from "../pages/superadmin/OcorrenciasAdmin";
import ConfiguracoesAdmin from "../pages/superadmin/ConfiguracoesAdmin";
import ErroAdmin from "../pages/superadmin/ErroAdmin";

export default function AppRoutes () {
    return (
        <Routes>
            {/*Rotas do site */}
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />

            {/*Rotas de autenticação */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />

            {/*Rotas do super admin */}
            <Route path="/dashboard/super-admin/">
                <Route path="" element={<DashboardAdmin />} />
                <Route path="condominios" element={<CondominiosAdmin />} />
                <Route path="moradores" element={<MoradoresAdmin />} />
                <Route path="cobrancas" element={<CobrancasAdmin />} />
                <Route path="ocorrencias" element={<OcorrenciasAdmin />} />
                <Route path="configuracoes" element={<ConfiguracoesAdmin />} />
                <Route path="*" element={<ErroAdmin />} />
            </Route>
        </Routes>
    )
}
