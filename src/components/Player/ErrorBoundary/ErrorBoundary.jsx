import React from "react";
import errorImage from "./../../../assets/FOeYt4E.png";
import { Icon } from "react-icons-kit";
import { ic_refresh } from "react-icons-kit/md/ic_refresh";

export default function ErrorBoundary({ message }) {
  const refreshPage = () => {
    localStorage.clear();
    window.location.reload(false);
  };
  return (
    <div className="error-message">
      <h1>{message}</h1>
      <img src={errorImage} alt="error" />
      <h1>This Page is Buried in the Sand</h1>
      <button
        className="custom-button"
        onClick={() => {
          refreshPage();
        }}
      >
        <Icon size={20} icon={ic_refresh} />
        Refresh
      </button>
    </div>
  );
}
