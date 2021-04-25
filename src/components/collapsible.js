import React, { Fragment, useState } from "react";

const Collapsible = ({ children }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  }

  const contentStyle = active ?
    {"display": "block"} :
    {"display": "none"};

  return (
    <Fragment>
      <div onClick={handleClick}>{children[0]}</div>
      <div style={contentStyle}>{children[1]}</div>
    </Fragment>
  );
}

export default Collapsible;
