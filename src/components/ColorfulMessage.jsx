import React from "react";

const ColorfulMessage = (props) => {
  //分割代入
  const { color, children } = props;
  console.log(props);
  const contentsStyle = {
    //プロパティ名(color)と値(color)が同じ場合colorで省略できる
    color,
    fontSize: "18px"
  };
  return (
    <>
      <p style={contentsStyle}>{children}</p>
    </>
  );
};

export default ColorfulMessage;
