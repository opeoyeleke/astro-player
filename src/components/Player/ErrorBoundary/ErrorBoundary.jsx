import React from "react";
import errorImage from "./../../../assets/FOeYt4E.png";

export default function ErrorBoundary({ message }) {
  return (
    <div className="error-message">
      <h1>{message}</h1>
      <img src={errorImage} alt="error" />
      <h1>This Page is Buried in the Sand</h1>
    </div>
  );
}
