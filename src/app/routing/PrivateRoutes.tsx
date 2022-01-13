import { Route, Routes, Navigate } from "react-router-dom";

import PainelDeControle from "../pages/TelasSistema/1 - PainelDeControle";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/painel" element={<PainelDeControle />} />

      <Route path="*" element={<Navigate to="/painel" />} />
    </Routes>
  );
};

export default PrivateRoutes;
