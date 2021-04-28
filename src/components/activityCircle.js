import React from "react";
import Tooltip from "./tooltip";

const ActivityCircle = ({ activity }) => {
  const { active, lastActive } = activity;
  const color = active ? "#98FB98": "#E8E8E8";
  const styles = { backgroundColor: color };

  const tooltipText = active ? "active": `last active: ${lastActive}`;

  return (
    <span className="tooltip-wrapper">
      <span className="colored-circle" style={styles} />
      <Tooltip direction={"bottom"}>
        {tooltipText}
      </Tooltip>
    </span>
  );
};

export default ActivityCircle;
