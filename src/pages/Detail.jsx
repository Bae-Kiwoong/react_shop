
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom"
import TabContent from "../components/Tabcontent";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/store";
import { setWatched } from "../redux/watchedSlice";

function Detail({ fruit }) {
  const { id } = useParams();
  const [num , setNum] = useState(0);
  const [num2 , setNum2] = useState(0);
  const [alert,setAlert] = useState(true);
  const [tabNumber, setTabNumber] = useState(0);
  const dispatch = useDispatch();

  const selectedFruit = fruit[id];

  //useEffect는 html이 전부 다 렌더링이 완료된후 실행이 된다.
  useEffect(()=>{
    //여기에 작성된 모든 코드들은 마운트,업데이트 될 때 실행
   let timer = setTimeout(()=>{
    
    
    setAlert(false);
   },5000)
//클리어 펑션을 안넣어주면 페이지 들어왔을때 이펙트가 실행되고 화면을 나가도 유지가 되버림.
   return()=>{
    clearTimeout(timer);

   }
    
  }, [])

  useEffect(()=>{
    
    
  },[num])
  //의존성 배열이 없으면 마운트,업데이트마다 실행
  //의존성 배열이 빈배열이면 마운트시 한번만 실행
  //의존성 배열에 특정 state,props가 있으면 마운트 될때와 해당 state,props가 업데이트 시 실행
  
  useEffect(()=>{
//방금 들어온 상품의 id를 로컬스토리지에 추가
    let watched = localStorage.getItem('watched');
    watched = JSON.parse(watched);
//이미 최근 본 상품이 3개일때 새로운걸 추가해야 하므로 기존거 하나 지우고 추가
//개수로만 삭제를 하니까 중복된걸 보게되면 문제가 생김
//이미 들어있는거면 안지움. 없을때만 삭제
    if(watched.length === 3 && !watched.includes(id))
      watched.pop();//배열의 가장 마지막을 지움

    watched = [id, ...watched]

    watched = new Set(watched);
    watched = Array.from(watched);
 
    localStorage.setItem('watched', JSON.stringify(watched));
    dispatch( setWatched(watched));

  },[])

    



  
  if( !selectedFruit){

    return <div>해당 상품이 없습니다.</div>
  }
  

  return (

    <div className="container mt-3">
      <button onClick={()=>{
        setNum(num+1)
      }}>버튼</button>{num}

      <button onClick={()=>{
        setNum2(num2 + 1)
      }}>버튼2</button>{num2}


      {alert ? <div className="alert alert-danger">5초 안에 구매하면 공짜</div> :'' }

      <div className="row">
        <div className="col-md-6">
          <img src={`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/img/${fruit[id].title}.jpg`} alt="" width='100%' />
        </div>
        <div className="col-md-6">
          <h4>{fruit[id].title}</h4>
          <p>{fruit[id].content}</p>
          <p>{fruit[id].price}</p>
          <button className="btn btn-danger" onClick={()=>{
            const item = {
              id: id,
              title: fruit[id].title,
              count: 1,
            } 
            dispatch(addItem(item));
            window.alert('장바구니에 추가되었습니다.')
          }}>주문하기</button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" justify defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{
            setTabNumber(0);
          }}>상세정보</Nav.Link>
        </Nav.Item>
    
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{
            setTabNumber(1);
          }}>리뷰</Nav.Link>
        </Nav.Item>
     
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{
            setTabNumber(2);
          }}>반품,교환정보</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tabNumber={tabNumber}/>

    </div>
  )
}

export default Detail