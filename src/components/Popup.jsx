import { useState } from "react";
import React from "react";
import ReactDom from "react-dom";
import Draggable from "react-draggable";
import data from "../data/PopupData.json";

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
}

//!!! this set position is what is causing the popup to reset 
/**
 * try getting top / left as states
 * then setting them
 */
const MODAL_STYLES = {
  position: "fixed",
  top: "30%",
  left: "30%",
};

const Popup = ({popup}) => {
  const [open, setOpen] = useState(false);
  const [extraTitle, setExtraTitle] = useState("Open ");
  var name = data[popup]["name"];

  // Close button does not work with touch screen
  const togglePopup = () => {
    setOpen(!open);
    if (open) {
      setExtraTitle("Open ");
    } else {
      setExtraTitle("Close ");
    }
  };

  const Modal = ({onClose}) => {
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
    <button className="Popup-Bar-Btn" onClick={() => togglePopup()}>{extraTitle + name}</button>
    <Modal onClose={() => togglePopup()}/>
    <div style={BUTTON_WRAPPER_STYLES} id={popup.toString()}>
    </div>
    </>
  );
};

export default Popup;
