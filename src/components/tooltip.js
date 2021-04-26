import React from "react";

const Tooltip = ({ children, direction, type }) => {
  let tooltipStyle;

  if (direction === "right" || direction === "left") {
    tooltipStyle = { top: "50%", transform: "translateY(-50%)" };
    if (direction === "right")
      tooltipStyle = { left: "105%", ...tooltipStyle };
    else 
      tooltipStyle = { right: "105%", ...tooltipStyle };
  }
  else {
    tooltipStyle = { left: "50%", transform: "translateX(-50%)" };
    if (direction === "top")
      tooltipStyle = { bottom: "105%", ...tooltipStyle };
    else
      tooltipStyle = { top: "110%", ...tooltipStyle };
  }
    

  let classes = "tooltip";
  if (type === "message") classes = "tooltip message-tooltip";

  return (
    <div className={classes} style={tooltipStyle}>
      {children}
    </div>
  );
}

export default Tooltip;
