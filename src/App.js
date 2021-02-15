import "./styles.css";
import { useState } from "react";

function Toast({ message, type }) {
  let toastColor, toastDarkColor;
  const [show, setShow] = useState("flex");
  if (type == "error") {
    toastColor = "#ffcdd2";
    toastDarkColor = "#b71c1c";
  } else if (type == "success") {
    toastColor = "#C8E6C9";
    toastDarkColor = "#004D40";
  } else if (type == "warning") {
    toastColor = "#FFECB3";
    toastDarkColor = "#FFAB00";
  } else {
    toastColor = "white";
    toastDarkColor = "black";
  }
  return (
    <div
      className="Toast"
      style={{
        backgroundColor: toastColor,
        border: "2px solid",
        borderColor: toastDarkColor,
        color: toastDarkColor,
        display: show,
        justifyContent: "space-between",
        padding: "0px 20px",
        alignItems: "center"
      }}
    >
      <p> {message}</p>
      <button
        style={{
          height: "20px",
          borderColor: toastDarkColor,
          color: toastDarkColor
        }}
        onClick={(e) => {
          setShow("none");
        }}
      >
        x
      </button>
    </div>
  );
}

export default function App() {
  const [toasts, setToasts] = useState([]);
  return (
    <div className="App">
      <button
        onClick={() => {
          setToasts([...toasts, <Toast message="successful" type="success" />]);
        }}
      >
        Display Success Toast
      </button>
      <button
        onClick={() => {
          setToasts([...toasts, <Toast message="failed" type="error" />]);
        }}
      >
        Display Error Toast
      </button>
      <button
        onClick={() => {
          setToasts([...toasts, <Toast message="warning" type="warning" />]);
        }}
      >
        Display Warning Toast
      </button>
      {toasts.map((toast) => {
        return <>{toast}</>;
      })}
    </div>
  );
}
