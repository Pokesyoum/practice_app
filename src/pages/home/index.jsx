import React from "react";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>ジャンケンに挑戦しよう！</h1>
        <Link to='/rsp'>
          <h1>ジャンケンページへ</h1>
        </Link>
      </div>
    );
  }
}