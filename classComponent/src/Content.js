import React from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>{this.props.hello}</h1>
        <button onClick={() => this.props.changeTitle("any thing")}>
          Change Title
        </button>
      </>
    );
  }
}

export default Content;
