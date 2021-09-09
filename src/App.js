import "./styles.css";
import React, { Component } from "react";
import "./App.css";
import Bar from "./components/Bar/Bar";
import InputField from "./components/InputField/InputField";
import Clarifai, { GENERAL_MODEL } from "clarifai";

const app = new Clarifai.App({
  apiKey: "25050b3732844eb089712f3ff0b522b0"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      getList: []
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(GENERAL_MODEL, this.state.input)

      .then((response) => {
        this.setState({ getList: response.outputs[0].data.concepts });
      });
  };

  render() {
    return (
      <div className="App">
        <Bar zIndex="modal" position="absolute" />
        <InputField
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
          getList={this.state.getList}
          imageUrl={this.state.imageUrl}
        />
      </div>
    );
  }
}

export default App;
