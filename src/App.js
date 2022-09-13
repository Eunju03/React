/* eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{ let copy = [...글제목]; copy[0] = '여자 코트 추천'; 글제목변경(copy) }}>
        글수정 </button>

      {/* <button onClick={()=>{ let copy1 = {...글제목}; copy1.sort(); 글제목변경(copy1) }}>
        가나다순정렬 </button> */}

      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> 
        { 따봉 }  </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ setModel(!modal) }}>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ setModel(true) }} >{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(true)}}>{ 글제목[i] }
              <span onClick={()=>{ 
                let copy2 = [...따봉]; 
                copy2[i] = copy2[i] + 1;
                따봉변경(copy2)
                }}>👍</span> 
              { 따봉[i] }</h4>
              <p>2월 17일 발행</p>
            </div>
            )
        })
      }

      
      {
        modal == true ? <Modal 글제목변경={글제목변경} 글제목={글제목}/> : null
      }


    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{ props.글제목변경(['여자 코트 추천','강남 우동맛집','파이썬독학']) }}>글수정</button>
    </div>
  )
}

export default App;
