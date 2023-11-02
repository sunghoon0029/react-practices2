/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 코트 추천', '아동 코트 추천']);
  let [좋아요, 좋아요변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '남자 신발 추천';
        글제목변경(copy);
      }}>글수정</button>

      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={() => { 좋아요변경(좋아요+1) }}>❤️</span> {좋아요} </h4>
        <p>11월 2일 발행</p>
      </div>

      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>11월 2일 발행</p>
      </div>

      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>11월 2일 발행</p>
      </div>
    </div>
  );
}

export default App;
