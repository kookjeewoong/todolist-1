import React, { useState, useEffect } from 'react';
import Button from "./components/button";
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
        'https://haja-api.webchemist.net/v1/todo'
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

  const handleDelete = (e) => {
    e.preventDefault(); //전파방지
    axios.delete('https://haja-api.webchemist.net/v1/todo/6201e9626009cc6edfefd935')
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
              <td><button type="button" onClick={handleDelete} rowkey ="{dt._id}">삭제</button><br />{dt._id}</td>
            </tr>
        ))
        }
        </tbody>
        </table>
        <button type="button" onClick={fetchList}>리스트 불러오기</button>
    </>
  );
}

export default Users;