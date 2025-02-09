import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hand from "../../components/hand";
import { HandType } from "../../interfaces/handType";
import { useRspBattle } from "../../hooks/useRspBattle";

export default function Index () {
  const handTypes: HandType[] = [HandType.Rock, HandType.Scissors, HandType.Paper];

  const battleCountVal = React.useRef(0);
  const winCountVal = React.useRef(0);
  
  const [resultString, winCount, confirmResult] = useRspBattle();
  const [selectHand, setSelectHand] = useState<HandType>(HandType.Rock);
  const [enemyHand, setEnemyHand] = useState<HandType>(HandType.Rock);
  const [battleCount, setBattleCount] = useState<number>(0);

  useEffect(() => {
    alert("手を選ぶと、勝敗が決まるよ！\n手を選んでね！");
    return () => {
      alert(`【戦績】\n${battleCountVal.current}戦中、${winCountVal.current}勝でした。`);
    };
  }, []);

  useEffect(() => {
    if (selectHand !== undefined) {
      const enemyHand: HandType = Math.floor(Math.random() * 3);
      setEnemyHand(enemyHand);
      confirmResult(selectHand, enemyHand);

      battleCountVal.current = battleCount;
      winCountVal.current = winCount;
    }
  }, [battleCount]);

  const handleOnClick = (val: HandType): void => {
    setBattleCount(battleCount + 1);
    setSelectHand(val);
  };

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
          <Hand selectHand={handType} selectedHand={selectHand} clickHand={handleOnClick} />
        ))}
      </div>
      <h1 style={{ color: "red" }}>{resultString}</h1>
      <h2 style={{ marginTop: 10 }}>相手の手</h2>
      <div style={{ display: "flex" }}>
        {handTypes.map((handType: HandType) => (
          <Hand selectHand={handType} selectedHand={enemyHand} clickHand={handleOnClick} />
        ))}
      </div>
      <Link to="/">
        <h1>じゃんけんを終了する</h1>
        <h4>※戦績が発表されます。</h4>
      </Link>
    </div>
  );
}