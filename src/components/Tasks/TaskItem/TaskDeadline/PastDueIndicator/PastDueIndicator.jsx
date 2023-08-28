import React from "react";

function PastDueIndicator({ isPastDue }) {
  if (isPastDue) {
    return <p className="past-due-text past-due"
    style={{marginBottom: "-27px"}}
    >Past due:</p>;
  }
  return null;
}

export default PastDueIndicator;
