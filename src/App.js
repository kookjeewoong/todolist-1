import React from "react"
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Input from "./components/input";
import Radio from "./components/radio";
import Select from "./components/select";
import Slider from "./components/slider";
//추가 컴포넌트
import Textarea from "./components/textarea";




function App() {
  const [radio, setRadio] = React.useState()

/*
  React.useEffect(() => {
    axios.get("httpd://localhost:5050/v1/todo").then(({data}) => StyleSheetList(data));
  }, []);
*/
  const handleChangeRadio = (e) => {
    setRadio(e.target.value)
  }

  const handleSubmit = () => {
    //const result = Object.values(form).every((v) => v !== "");
    console.log("test");

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


      <p className="bg-info" style = {{width:800, height: 50}}>
      Theme!!!
      </p>

<div className="panel panel-default">
  <div className="panel-heading">리스트</div>
  <table className="table table-bordered" style={{width:800}}>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
      </thead>
    <tbody>
      <tr>
        <td>윤</td>
        <td>원열</td>
        <td>윤원열</td>
      </tr>
      <tr>
        <td>국</td>
        <td>지웅</td>
        <td>국지웅</td>
      </tr>
    </tbody>
  </table>
</div>

      <h3>Input</h3>
      <Input name="name" value="" />

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
