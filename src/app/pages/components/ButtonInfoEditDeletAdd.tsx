import { ReactNode } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import Button from "@mui/material/Button";

import theme from "../../../stylesTheme/Theme";

type PropsBtnPerson = {
  title: string;
  icon: ReactNode;
  onClick: () => void;
};

const ButtonInfoEditDeletAdd = ({ icon, onClick, title }: PropsBtnPerson) => {
  return (
    <>
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip>
            <strong style={{ color: "#fff" }}>{title}</strong>
          </Tooltip>
        }
      >
        <Button
          sx={{
            margin: ".3rem",
            background: theme.background.primary,
            minWidth: "32px",
            color: "black",
            fontSize: "1.3rem",
          }}
          onClick={onClick}
        >
          {icon}
        </Button>
      </OverlayTrigger>
    </>
  );
};
export default ButtonInfoEditDeletAdd;
