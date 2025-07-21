import style from './App.module.css'
import './App.css'
import data from "./mokData"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Header from './components/Header'
import Detail from './pages/Detail'
import About from './pages/About'
import styled from 'styled-components'
import axios  from 'axios'

// styled-component 기본 사용법 - 터미널에서 npm install styled-compinents 
// 다른 컴포넌트에 영향을 주지 않음. 구조가 복잡할때 사용하면 편함. 단순할때는 굳이..
// const 컴포넌트이름지정 = styled.태그명` css속성` = styled import 해야함
// const Btn = styled.button
// `
// background: ${props => props.bg};
// color: ${props => props.bg === 'blue' ? 'white' : 'black'};
// font-size: 30px;
// border: 1px solid red;
// `

// const Btn2 = styled(Btn)
// `
// width:200px;
// height: 200px;

// `

// const Div = styled.div
// `
// padding: 20px;
// background: skyblue;
// `

const App = () => {
const [fruit, setFruit] = useState([]);


useEffect(()=>{
 
  axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/fruit.json')
        .then((response)=>{
          setFruit([...response.data])
          

        })
        .catch((error)=>{
          console.log(error);
          
        })
},[])

return (
  <div className={style.container}>
    {/* <Div>
    <Btn bg='blue'>버튼</Btn>
    <Btn bg='pink'>버튼</Btn>
    <Btn2 bg='green'>버튼</Btn2>
    </Div> */}
    <Header />

   


    <Routes>
    <Route path='/' element={<MainPage fruit={fruit}/>} />
    <Route path='/test' element={<h1>테스트페이지</h1>}/>
    <Route path='/detail/:id' element={<Detail fruit={fruit} />} />
    {/* 하위 라우터 생성 방법 */}
    <Route path='/about' element={<About />} >
    <Route path='intro' element={<div>회사소개</div>} />
    <Route path='history' element={<div>연력</div>} />
    <Route path='loc' element={<div>오시는 길</div>} />
    </Route>

    <Route path='*' element={<h1>존재하지 않는 페이지</h1>} />
   
    </Routes>

      <button onClick={()=>{
        
        axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/morefruit.json')
        .then(response => {
         
          setFruit([...fruit, ...response.data]);
         
          console.log(response.data);

        })
          .catch(error => {
            console.log(error);
            
          })

      }}>더보기</button>


      <button onClick={()=>{
        axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/fruit.json')
        .then((response)=>{
          console.log(response.data);

        })
        .catch((error)=>{
          console.log(error);
          
        })
      }}>과일정보 받아오기</button>


   



    </div>
  )
}

export default App