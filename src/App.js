import React from "react"
//추가 컴포넌트
import Users from "./Users";

function App() {
  return (
    <div className="container">
      <p className="bg-info" style = {{width:800, height: 50}}>Theme!!!</p>

      <div className="panel panel-default">
        <Users />
      </div>
    </div>
  );
}

export default App;
