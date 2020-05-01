import React from "react";

const Footer = props => {
  return (
    <div>
      <button
        disabled={!props.previous}
        onClick={e => {
          props.onPrevious(e);
        }}
      >
        {" "}
        Previous
      </button>
      <button
        disabled={!props.next}
        onClick={e => {
          props.onNext(e);
        }}
      >
        {" "}
        Next
      </button>
      <button onClick={props.onSubmit}> Submit</button>
      <button onClick={props.onShow}> Show Answer</button>
    </div>
  );
};

export default Footer;
