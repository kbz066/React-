import React from "react";
import ReactDom from "react-dom";

let  newP=React.createElement("p",null,"我是react 创建的p标签");
ReactDom.render(newP,document.getElementById("dv"));