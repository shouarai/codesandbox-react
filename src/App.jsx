import React from "react";

const App = () => {
  //クリックイベント
  const onClickButton = () => alert();

  //css
  const contentsStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちわ</h1>
      <p style={contentsStyle}>お元気ですか?</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
