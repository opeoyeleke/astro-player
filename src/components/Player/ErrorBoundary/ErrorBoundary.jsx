import React from "react";
import errorImage from "./../../../assets/FOeYt4E.png";
import { Icon } from "react-icons-kit";
import { ic_refresh } from "react-icons-kit/md/ic_refresh";

export default function ErrorBoundary({ message }) {
  const refreshPage = () => {
    // localStorage.clear();
    window.location.reload(false);
  };
  return (
    <div className="error-message">
      <h3>{message}</h3>
      <img src={errorImage} alt="error" />
      <h3>This Page is Buried in the Sand</h3>
      <h3
        className="title"
        onClick={() => {
          refreshPage();
        }}
      >
        <Icon size={20} icon={ic_refresh} />
        Refresh
      </h3>
    </div>
  );
}
