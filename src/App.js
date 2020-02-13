import React from "react";
import { Label, Input } from "semantic-ui-react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      reverseText: "",
      capsText: ""
    };
  }
  handleChange = (context, element) => {
    const text = element.value;
    const reverseText = text.split("").reverse().join("");
    const capsText = text.toUpperCase();
    this.setState({ text: text, reverseText: reverseText, capsText: capsText });
  };

  render() {
    return (
      <div>
        <Input onChange={this.handleChange} />
        <Label style={{ marginLeft: "8rem" }}>{this.state.reverseText}</Label>
        &nbsp;
        &nbsp;
        <Label style={{ marginLeft: "2rem", marginTop: "30rem" }}>
          {this.state.capsText}
        </Label>
        &nbsp;
        &nbsp;
        <Label style={{ fontSize: "3rem" }}>{this.state.text}</Label>
      </div>
    );
  }
}

export default App;
