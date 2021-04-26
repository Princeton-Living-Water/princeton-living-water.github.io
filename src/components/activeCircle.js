import React, { Fragment } from "react";

const ActiveCircle = ({ active }) => {
  const color = active ? "#98FB98": "white";
  const styles = { backgroundColor: color };

  return (
    <Fragment>
      <span className="colored-circle" style={styles} />
    </Fragment>
  );
};

export default ActiveCircle;
