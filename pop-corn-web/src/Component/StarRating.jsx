import React from "react";

function StarRating({ maxRating =8 }) {

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const starContainerStyle = {
    display: "flex",
    alignItems :"center",
    gap: "4px",
  };
  const textStyle = {
    lineHeight: "0",
    margin: "0",
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span style={textStyle}>S{i + 1}</span>
        ))}
      </div>
      <p>10</p>
    </div>
  );
}

export default StarRating;
