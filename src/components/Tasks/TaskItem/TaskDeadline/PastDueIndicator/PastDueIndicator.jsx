import React from "react";

function PastDueIndicator({ isPastDue }) {
  if (isPastDue) {
    return <p className="past-due-text past-due">Past due:</p>;
  }
  return null;
}

export default PastDueIndicator;
