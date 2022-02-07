import { findByLabelText } from "@testing-library/react";
import React from "react"
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Input from "./components/input";
import Radio from "./components/radio";
import Select from "./components/select";
//추가 컴포넌트
import Textarea from "./components/textarea";
import Users from "./Users";

function App() {
  const [radio, setRadio] = React.useState()
  
  //const axios = require('axios'); // node.js쓸때 모듈 불러오기
  //const data = axios.get("https://haja-api.webchemist.net/v1/todo"); // 불러온 데이터를 저장한다
  /*

  fetch("https://haja-api.webchemist.net/v1/todo")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

*/
  const handleChangeRadio = (e) => {
    setRadio(e.target.value)
  }

  const handleSubmit = () => {
    //const result = Object.values(form).every((v) => v !== "");
    console.log("test1");

  };

  /*
    const result = Object.values(form).every((v) => v !== "");

    if (result) {
      axios.post("http://localhost:5050/v1/todo", form);
    }
  */

  /*
 const handleSubmit = (event: React.FormEvent) => {
  // do something 
    event.preventDefault();
  };
*/
  return (
    
    <div className="container">
      <p className="bg-info" style = {{width:800, height: 50}}>Theme!!!</p>

      <div className="panel panel-default">
        <Users />
      </div>


      <h3>Input</h3>
      <div>
      <label>제목 <Input name="title" value="" placeholder="제목" /></label>
      <label>내용 <Textarea name="content" placeholder="내용"/></label>
      </div>

      <h3>Checkbox</h3>
      <label><Checkbox value="1" style={{width:20, height: 20}}/> 1</label> &nbsp;&nbsp;
      <label><Checkbox value="2" style={{width:20, height: 20}}/> 2</label>

      <h3>Radio</h3>
      <label><Radio value="0" checked={radio === "0"} onChange={handleChangeRadio} /> 0 </label>&nbsp;&nbsp;
      <label><Radio value="1" checked={radio === "1"} onChange={handleChangeRadio} /> 1 </label>&nbsp;&nbsp;
      <label><Radio value="2" checked={radio === "2"} onChange={handleChangeRadio} /> 2 </label>&nbsp;&nbsp;
      <label><Radio value="3" checked={radio === "3"} onChange={handleChangeRadio} /> 3 </label>&nbsp;&nbsp;
      <label><Radio value="4" checked={radio === "4"} onChange={handleChangeRadio} /> 4 </label>

      <h3>Select</h3>
      <Select name="W_SELECT" />

      <h3>TextArea</h3>
      <Textarea name="T_AREA"/>
      <h3>Button</h3>
      <Button onclick={handleSubmit}>체크</Button>
    </div>
  );
}

export default App;
