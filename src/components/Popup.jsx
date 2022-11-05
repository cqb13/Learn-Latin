import { useState } from "react";
import React from "react";
import ReactDom from "react-dom";
import Draggable from "react-draggable";
import data from "../data/PopupData.json";

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
}

const MODAL_STYLES = {
  position: "fixed",
  top: "30%",
  left: "30%",
};

const Popup = ({popup}) => {
  const [open, setOpen] = useState(false);
  var name = data[popup]["name"]

  const Modal = ({onClose,}) => {
    if (!open) return null;
  
    const PopupContent = ({content}) => {
      return (
        <p>{content}</p>
      );
    }  
  
    return ReactDom.createPortal (
      <>
      <Draggable>
      <div className="Popup-Container" style={MODAL_STYLES}>
      <div className="Popup-Header">
          <h2 className="Popup-Title">{name}</h2>
      </div>
      <hr/>
      <div className="Popup-Content">
        {data[popup]["data"]?.length > 0 ? (
          <>
            {data[popup]["data"].map((text) => (
              <PopupContent content={text}/>
            ))}
          </>
        ) : (<></>)}
      </div>
      <hr/>
      <button onClick={onClose}>Close</button>
      </div>
      </Draggable>
      </>,
      document.getElementById(popup.toString())
    );
  }

  return (
    <>
    <button className="Popup-Bar-Btn" onClick={() => setOpen(true)}>{name}</button>
    <Modal onClose={() => setOpen(false)}/>
    <div style={BUTTON_WRAPPER_STYLES} id={popup.toString()}>
    </div>
    </>
  );
};

export default Popup;
