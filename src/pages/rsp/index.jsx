import React from "react";
import { Link } from "react-router-dom";
import Hand from "../../components/hand.jsx";

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      selectHand: 0,
    };
  }

  handOnClick = (val) => {
    this.setState({selectHand: val});
  }
  render() {
    const handTypes = [0,1,2]
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>じゃんけんページ</h1>
        <div style={{ display: "flex" }}>
          {handTypes.map((handType) => (
            <Hand selectHand={handType} selectedHand={this.state.selectHand} clickHand={this.handOnClick}/>
          ))}
        </div>
        <Link to="/">
          <h1>じゃんけんを終了する</h1>
          <h4>※戦績が発表されます。</h4>
        </Link>
      </div>
    );
  }
}