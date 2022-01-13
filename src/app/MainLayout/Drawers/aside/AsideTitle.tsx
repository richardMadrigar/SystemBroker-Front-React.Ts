import React from "react";

import AsideMenuLeft from "./AsideMenuLeft";

export function AsideTitle() {
  return (
    <>
      <AsideMenuLeft
        title="Painel de controle"
        to="/painel"
        icon="/media/icons/gen001.svg"
      />
      <AsideMenuLeft
        title="Usuários"
        to="/usuarios"
        icon="/media/icons/gen049.svg"
      />
      <AsideMenuLeft
        title="Extrato de recebimentos"
        to="/recebimentos"
        icon="/media/icons/gra001.svg"
      />
      <AsideMenuLeft
        title="Extrato de evento/mês"
        to="/eventos"
        icon="/media/icons/gra012.svg"
      />
      <AsideMenuLeft
        title="Meus documentos"
        to="/documentos"
        icon="/media/icons/fil016.svg"
      />
      <AsideMenuLeft
        title="Minhas notificações"
        to="/notificacoes"
        icon="/media/icons/gen007.svg"
      />
    </>
  );
}
