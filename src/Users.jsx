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

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <>
        {users.map(dt => (
          <table className="table table-bordered table-condensed">
          <thead>
            <tr>
              <th>제목</th>
              <th>내용</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr key={dt._id}>
              <td>{dt.title}</td>
              <td>{dt.content}</td>
              <td>{dt.date}</td>
            </tr>
          </tbody>
          </table>
        ))}
      <button onClick={fetchList}>리스트 불러오기</button>
    </>
  );
}

export default Users;