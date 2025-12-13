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

//Condo Admin
import DashboardCondoAdmin from "../pages/condoadmin/DashboardCondoAdmin";
import MoradoresCondoAdmin from "../pages/condoadmin/MoradoresCondoAdmin";
import FinanceiroCondoAdmin from "../pages/condoadmin/FinanceiroCondoAdmin";
import ComunicacaoCondoAdmin from "../pages/condoadmin/ComunicacaoCondoAdmin";
import ReservasCondoAdmin from "../pages/condoadmin/ReservasCondoAdmin";
import OcorrenciasCondoAdmin from "../pages/condoadmin/OcorrenciasCondoAdmin";
import ConfiguracoesCondoAdmin from "../pages/condoadmin/ConfiguracoesCondoAdmin";
import NotFoundPage from "../pages/condoadmin/NotFoundPage";

//Morador
import DashboardMorador from "../pages/morador/DashboardMorador";
import MinhasReservasMorador from "../pages/morador/MinhasReservasMorador";
import MinhasOcorrenciasMorador from "../pages/morador/MinhasOcorrenciasMorador";
import FinanceiroMorador from "../pages/morador/FinanceiroMorador";
import AvisosComunicadosMorador from "../pages/morador/AvisosComunicadosMorador";
import MeuPerfilMorador from "../pages/morador/MeuPerfilMorador";
import NotFoundMorador from "../pages/morador/NotFoundMorador";

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

            {/*Rotas do admin do condomínio */}
            <Route path="/dashboard/condoadmin/">
                <Route path="" element={<DashboardCondoAdmin />} />
                <Route path="moradores" element={<MoradoresCondoAdmin />} />
                <Route path="financeiro" element={<FinanceiroCondoAdmin />} />
                <Route path="comunicacao" element={<ComunicacaoCondoAdmin />} />
                <Route path="reservas" element={<ReservasCondoAdmin />} />
                <Route path="ocorrencias" element={<OcorrenciasCondoAdmin />} />
                <Route path="configuracoes" element={<ConfiguracoesCondoAdmin />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>

            {/*Rotas do morador do condomínio */}
            <Route path="/dashboard/morador/">
                <Route path="" element={<DashboardMorador />} />
                <Route path="reservas" element={<MinhasReservasMorador />} />
                <Route path="ocorrencias" element={<MinhasOcorrenciasMorador />} />
                <Route path="financeiro" element={<FinanceiroMorador />} />
                <Route path="avisos" element={<AvisosComunicadosMorador />} />
                <Route path="meu-perfil" element={<MeuPerfilMorador />} />
                <Route path="*" element={<NotFoundMorador />} />
            </Route>
        </Routes>
    )
}
