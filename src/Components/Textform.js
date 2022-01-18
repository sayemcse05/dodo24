import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpclick = () => {
    // console.log("uperrcase " +text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleloclick = () => {
    // console.log("uperrcase " +text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleclearclick = () => {
    // console.log("uperrcase " +text);
    let newText = "";
    setText(newText);
  };

  const handleonchange = (event) => {
    // console.log("onchange")
    setText(event.target.value);
  };

//   const handleCopy = () => {
//     var text = document.getElementById("myBox");
//     text.select();
//     navigator.clipboard.writeText(text.value);
//   };
  const handleRemoveExtra = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUpclick}
        >
          convert to upercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleloclick}
        >
          convert to lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleclearclick}
        >
          Clear Text
        </button>
        {/* <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleCopy} id="myBox"
        >
          Copy Text
        </button> */}
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleRemoveExtra}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length}words and {text.length}characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read </p>
      </div>
      <div className="container">
        <h1>Preview</h1>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in the text box to preview Here"}
        </p>
      </div>
    </>
  );
}
