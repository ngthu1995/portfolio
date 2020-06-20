import React from "react";

const Error = () => {
  return (
    <div
      style={{
        backgroundImage: `url(images/404.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: "100vh",
      }}
    ></div>
  );
};

export default Error;
