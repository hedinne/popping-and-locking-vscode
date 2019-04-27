var React = require("react");
var ReactDOM = require("react-dom");

class MyComponent extends React.Component {
  render() {
    return <div classname="name">Hello World</div>;
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));
