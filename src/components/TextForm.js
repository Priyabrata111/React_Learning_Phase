import React, { useState } from "react";

export default function TextForm(props) {
  const buttonClicked = () => {
    if (originalText.length !== text.length) setOrgText(text);
    let convertText = text.toUpperCase();
    setText(convertText);
    //console.log(originalText);
  };
  const buttonClicked2 = () => {
    if (originalText.length !== text.length) setOrgText(text);

    let convertText = text.toLowerCase();
    setText(convertText);
  };
  const buttonClicked3 = () => {
    setText(originalText);
  };
  const textChanged = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  const [originalText, setOrgText] = useState("");
  return (
    <>
      <h2>{props.heading}</h2>
      <div className="mb-2">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          onChange={textChanged}
          value={text}
          placeholder="Enter The Text Here ..."
        ></textarea>
      </div>
      <button type="button" onClick={buttonClicked} className="btn btn-primary">
        {props.submit}
      </button>
      <button
        type="button"
        onClick={buttonClicked2}
        className="btn btn-secondary"
      >
        {props.submit2}
      </button>
      <button type="button" onClick={buttonClicked3} className="btn btn-dark">
        {props.submit3}
      </button>
    </>
  );
}
