import React from "react";
import ReactDom from "react-dom";

import Test from "../Component/Test";

let  newP=React.createElement("p",null,"我是react 创建的p标签");

const mydiv =<div>111111</div>


let obj={
    name : "李二狗",
    age : 123
};
ReactDom.render(
    
    <Test name={obj.name} age={obj.age}></Test>
    
    ,document.getElementById("dv"));

