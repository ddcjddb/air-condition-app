import React from "react";

const Detail = ({ matched_key, value }) => {
  return (
    <p>
      {matched_key}:{value}
    </p>
  );
};

export default Detail;
