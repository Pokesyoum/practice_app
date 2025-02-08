import React from "react";

export default class Hand extends React.Component {
  render() {
    const imgSize = 100;
    const handTypes = ["rock", "scissors", "paper"]
    return (
      <div>
        <button
          onClick={() => {
            this.props.clickHand(this.props.selectHand);
          }}
        >
          <img
            src={`images/${handTypes[this.props.selectHand]}.jpeg`}
            alt="rock"
            style={{
              height: imgSize,
              width: imgSize,
              opacity: this.props.selectedHand === this.props.selectHand ? "1.0" : "0.3",
            }}
          />
        </button>
      </div>
    );
  }
}