import React from "react"
import Input from "./components/input";
//추가 컴포넌트
import Textarea from "./components/textarea";
import Users from "./Users";
import axios from 'axios';

function App() {
  
  //const axios = require('axios'); // node.js쓸때 모듈 불러오기
  //const data = axios.get("https://haja-api.webchemist.net/v1/todo"); // 불러온 데이터를 저장한다
  /*

  fetch("https://haja-api.webchemist.net/v1/todo")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

*/


const hadleButton = (e) => {
  console.log(e);
  e.preventDefault(); //전파방지
  axios.post('https://haja-api.webchemist.net/v1/todo', {
    "title": '냐옹',
    "content": '테스트',
    "date": new Date(),
    "deleted": new Date(),
    "createdAt": new Date(),
    "updatedAt": new Date(),
  })
  .then((response) => {
    alert('저장되었습니다.');
    hadleButton();
  })
  .catch((error) => {
    alert('실패하였습니다.');
  });
}

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
      <button type="button" onClick={hadleButton}>전송</button>
      </div>


      <h3>Input</h3>
      <div>
      <label>제목 <Input name="title" value="" placeholder="제목" /></label>
      <label>내용 <Textarea name="content" placeholder="내용"/></label>
      </div>

    </div>
  );
}

export default App;
