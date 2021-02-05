import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  //numは変数　setNumは関数　0は初期値　配列の分割代入
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  //クリックイベント

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitch = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //numに変更がない場合はuseEffectはスキップされる
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちわ</h1>
      {/**ColorfulMessageにわたすprops */}
      {/* <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink" message="元気です" /> */}

      {/**ColorfulMessageにわたすprops children */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink"> 元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitch}>on/of</button>
      <p>{num}</p>
      {/* faceShowFlagがtrueなら右の😭を表示 */}
      {faceShowFlag && <p>😭</p>}
    </>
  );
};

export default App;
