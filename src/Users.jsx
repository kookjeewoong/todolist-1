import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchList = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        'https://haja-api.webchemist.net/v1/todo/'
      );
      setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchList();
  }, []);


    //갹채를 업데이트하기위해 useState안에 객체를 사용
    const [inputs, setInputs] = useState({  
      title: '',
      content: '',
  })
  //값을 가져오기 위해 inputs의 name으로 가져왔다
  const { title, content, search_title } = inputs   

  const onChange = (e) => {
  //input에 name을 가진 요소의 value에 이벤트를 걸었다
  const { name, value } = e.target
  // 변수를 만들어 이벤트가 발생했을때의 value를 넣어줬다
  const nextInputs = {//스프레드 문법으로 기존의 객체를 복사한다.
          ...inputs,  
          [name]: value,
      }
      setInputs(nextInputs) //만든 변수를 seInput으로 변경해준다.

  }
 //안의 값을 초기화하는 객체를 변수에 넣었다
  const onReset = () => {
      const resetInputs = {       
        title: '',
          content: '',
      }
 //초기화 객체값을 넣은 변수로 변경하도록 셋인풋 실행
      setInputs(resetInputs)      
  }

  const handleButton = (e) => {
    console.log(e); //전파방지
    console.log({content});

    axios.post('https://haja-api.webchemist.net/v1/todo', {
      "title": title,
      "content": content,
      "date": new Date(),
      "deleted": new Date(),
      "createdAt": new Date(),
      "updatedAt": new Date(),
    })
    .then((response) => {
      alert('저장되었습니다.');
      fetchList(); //전송시 리스트 갱신
    })
    .catch((error) => {
      alert('실패하였습니다.');
    });

}




  const handleDelete = (e) => {
    const del = e.target.getAttribute('del-msg'); // del-msg prop의 value를 가져옴

    e.preventDefault(); //전파방지
    axios.delete('https://haja-api.webchemist.net/v1/todo/' + del)
    .then((response) => {
      alert('삭제되었습니다.');
      fetchList();
    })
    .catch((error) => {
      alert('실패하였습니다.');
    });
  }



  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  
  return (
    <>
    <form>
      
        <div>
          <p>
            <button onClick={fetchList}>리스트 갱신</button> &nbsp;&nbsp;
            <input name="title" placeholder="검색 조건" onChange={onChange} value={search_title} style={{width:200, height:30}} /> &nbsp;&nbsp;
            <button type="button" onClick={handleButton}>전송</button>
          </p>
        </div>
        <table className="table table-bordered table-condensed">
        <thead>
          <tr>
            <th>제목</th>
            <th>내용</th>
            <th>날짜</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
        {
          users.map(dt => (
            <tr>
              <td>{dt.title}</td>
              <td>{dt.content}</td>
              <td>{dt.date}</td>
              <td><button onClick={handleDelete} del-msg={dt._id}>삭제</button><br />{dt._id}</td>
            </tr>
        ))
        }
        </tbody>
        </table>

      <div>
            <p>
              <input name="title" placeholder="제목" onChange={onChange} value={title} style={{width:500, height:30}} />
            </p>
            <p>
              <textarea name="content" placeholder="콘텐츠" onChange={onChange} value={content} style={{width:500, height:100}}></textarea>
            </p>
            
            <button type="button" onClick={handleButton}>전송</button>
            <button type="button" onClick={onReset}>인풋 초기화</button>
            
            <div>
              <p><b>{title}</b> </p>
              <p><b>{content}</b></p>
            </div>

            <div style={{height:30}}></div>
        </div>

      </form>
    </>
  );
}

export default Users;