import React from "react";

const Question = props => {
  console.log(props);
  return (
    <div>
      <div> {props.data.question} </div>
      <div>
        <ul>
          {props.data.answers.map(ans => (
            <li key={ans.value}>
              <input
                type="radio"
                name="ans"
                value={ans.value}
                onChange={props.onAnsSelection}
              />
              <label
                className={
                  props.showAns && ans.isCorrect ? "show-ans" : "hide-ans"
                }
              >
                {ans.value}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Question;
