import React from "react";
import { Avatar } from "@material-ui/core";
import "./sidebarrow.css";
const SidebarRow = ({ title, Icon, src }) => {
  return (
    <div className="sidebarrow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
