/* eslint-disable*/

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(2);
  let [입력값, 입력값변경] = useState('');
  

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
              <h4 onClick={()=>{setModal(true); setTitle(i)}}>{ 글제목[i] }
              <span onClick={(e)=>{ 
                e.stopPropagation();
                let copy2 = [...따봉]; 
                copy2[i] = copy2[i] + 1;
                따봉변경(copy2)
                }}>👍</span> 
              { 따봉[i] }</h4>
              <p>2월 17일 발행</p>
              <button onClick={()=> { let copy3 = [...글제목]; copy3.splice(i, 1); 글제목변경(copy3) }}>삭제</button>
            </div>
            )
        })
      }

      {/* <button onClick={()=> {setTitle(0) }}>글제목0</button>
      <button onClick={()=> {setTitle(1) }}>글제목1</button>
      <button onClick={()=> {setTitle(2) }}>글제목2</button> */}
      
      <input onChange={(e)=>{ 입력값변경(e.target.value); }} />
      <button onClick={()=> { let copy3 = [...글제목]; copy3.unshift(입력값); 글제목변경(copy3) }}>추가</button>

      {
        modal == true ? <Modal title = {title}  글제목={글제목}/> : null
      }
      <Modal2></Modal2>

      </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{ props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      {/* <button onClick={()=>{ props.글제목변경(['여자 코트 추천','강남 우동맛집','파이썬독학']) }}>글수정</button> */}
    </div>
  )
}

// 클래스 컴포넌트 만드는법
class Modal2 extends React.Component{
  constructor(props){
    super(props)
    // 클래스안에서 state 만드는법
    this.state = {
      name : 'Kim',
      age : 20
    }
  }
  render(){
    return(
      <div>안녕 {this.state.age}<button onClick={()=>{ this.setState({age : 21}) }}>버튼</button></div>
    )
  }
}


export default App;
