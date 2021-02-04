import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  //クリックイベント
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちわ</h1>
      {/**ColorfulMessageにわたすprops */}
      {/* <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink" message="元気です" /> */}

      {/**ColorfulMessageにわたすprops children */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink"> 元気です</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
