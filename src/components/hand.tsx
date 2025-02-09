import React from "react";
import { HandType } from "../interfaces/handType";

interface Props {
  selectHand: HandType;
  clickHand: (val: HandType) => void;
  selectedHand: HandType;
}

export default class Hand extends React.Component<Props, {}> {
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