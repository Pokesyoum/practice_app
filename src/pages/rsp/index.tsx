import React from "react";
import { Link } from "react-router-dom";
import Hand from "../../components/hand";
import { HandType } from "../../interfaces/handType";

interface Props {}

interface State {
  selectHand: HandType;
  enemyHand: HandType;
  resultString: string;
  winCount: number;
  battleCount: number;
}

export default class Index extends React.Component<Props, State> {
  handTypes: HandType[] = [HandType.Rock, HandType.Scissors, HandType.Paper];
  constructor(props: Props) {
    super(props);
    this.state = {
      selectHand: HandType.Rock,
      enemyHand: HandType.Rock,
      resultString: "最初はグーじゃんけん",
      winCount: 0,
      battleCount: 0,
    };
  }

componentDidMount(): void {
  alert("手を選ぶと、勝敗が決まるよ！\n手を選んでね！")
}

componentDidUpdate(prevProps: Props, prevState: State) {
  if (prevState.battleCount !== this.state.battleCount) {
    const enemyHand: HandType = Math.floor(Math.random() * 3);
    this.setState({ enemyHand: enemyHand })
    this.confirmResult(this.state.selectHand, enemyHand);
  }
}

componentWillUnmount() {
  alert(
    `【戦績】\n${this.state.battleCount}戦中、${this.state.winCount}勝でした。`
  );
}

  handleOnClick = (val: HandType): void => {
    this.setState({ battleCount: this.state.battleCount + 1 })
    this.setState({selectHand: val});
  };

  confirmResult(selectHand: HandType, enemyHand: HandType): void {
    const result: number = (selectHand - enemyHand + 3) % 3;
    if (result === 0) {
      return this.setState({
        resultString: "あいこで",
      });
    } else if (result === 2) {
      return this.setState({
        resultString: "勝ち",
        winCount: this.state.winCount + 1
      });
    } else {
      return this.setState({
        resultString: "負け"
      });
    }
  }

  render() {
    const handTypes = [HandType.Rock, HandType.Scissors, HandType.Paper];
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>じゃんけんページ</h1>
        <h2>自分の手</h2>
        <div style={{ display: "flex" }}>
          {handTypes.map((handType: HandType) => (
            <Hand selectHand={handType} selectedHand={this.state.selectHand} clickHand={this.handleOnClick} />
          ))}
        </div>
        <h1 style={{ color: "red" }}>{this.state.resultString}</h1>
        <h2 style={{ marginTop: 10 }}>相手の手</h2>
        <div style={{ display: "flex" }}>
          {this.handTypes.map((handType: HandType) => (
            <Hand selectHand={handType} selectedHand={this.state.enemyHand} clickHand={this.handleOnClick} />
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