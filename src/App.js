import React, { Component } from "react";
import "./styles.css";
import Footer from "./components/footer";
import Question from "./components/question";
import questions from "./config/data";

class App extends Component {
  state = {
    currentIndex: 0,
    data: questions,
    currentQuestion: questions[0],
    enablePreviousBtn: true,
    enableNextBtn: true,
    showAns: false
  };

  onPreviousHandler = e => {
    //check the condition to see how many question left and based on
    //that move to previous question

    if (this.state.currentIndex === 0) {
      this.setState({ enablePreviousBtn: false });

      // e.target.disabled = true;
      return;
    }
    this.setState(cstate => {
      console.log(cstate.currentIndex);
      return {
        showAns: false,
        enableNextBtn: true,
        currentIndex: cstate.currentIndex - 1,
        currentQuestion: cstate.data[cstate.currentIndex - 1]
      };
    });
  };
  onSubmitHandler = () => {
    this.setState({ showAns: true });
  };
  onNextHandler = e => {
    console.log(this.state.currentIndex);
    if (this.state.currentIndex === this.state.data.length - 1) {
      // e.target.disabled = true;
      this.setState({ enableNextBtn: false });
      return;
    }
    this.setState(cstate => {
      console.log(cstate.currentIndex);
      return {
        showAns: false,
        enablePreviousBtn: true,
        currentIndex: cstate.currentIndex + 1,
        currentQuestion: cstate.data[cstate.currentIndex + 1]
      };
    });
  };
  onShowAnswerHandler = () => {
    this.setState({ showAns: true });
  };

  onAnswerSelection = e => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="App">
        <h3>Quiz App</h3>
        <Question
          data={this.state.currentQuestion}
          showAns={this.state.showAns}
          onAnsSelection={this.onAnswerSelection}
        />
        <Footer
          previous={this.state.enablePreviousBtn}
          next={this.state.enableNextBtn}
          onPrevious={this.onPreviousHandler}
          onNext={this.onNextHandler}
          onSubmit={this.onSubmitHandler}
          onShow={this.onShowAnswerHandler}
        />
      </div>
    );
  }
}

export default App;
