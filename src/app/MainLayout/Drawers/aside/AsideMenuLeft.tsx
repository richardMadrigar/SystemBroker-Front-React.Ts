import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import { ListItem, ListItemIcon } from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

import { toAbsoluteUrl } from "../../../../setup/toAbsoluteUrl";

type Props = {
  title: string;
  to: string;
  icon: ReactNode;
};

const AsideMenuLeft = ({ title, to, icon }: Props) => {
  return (
    <>
      <Link to={to} style={{ textDecoration: "none" }}>
        <List>
          <ListItem button>
            <ListItemIcon
              style={{
                color: "#a2a3b7",
                marginRight: "-15px",
              }}
            >
              <div>
                <img
                  src={toAbsoluteUrl(`${icon}`)}
                  alt="logo da empresa "
                  style={{ height: "25px" }}
                />
              </div>
            </ListItemIcon>
            <ListItemText
              primary={title}
              sx={{ fontSize: ".7rem", color: "#a2a3b7" }}
            />
          </ListItem>
        </List>
      </Link>
    </>
  );
};
export default AsideMenuLeft;
