import React from "react";
import css from "./Loading.module.css";
const Loading = () => {
  return (
    <img
      className={css["img-container"]}
      src="https://cdn.dribbble.com/users/4241225/screenshots/14521747/media/d9d6f50e1443ecbdef32497685c0b5eb.gif"
    ></img>
  );
};

export default Loading;
