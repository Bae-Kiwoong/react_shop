import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, changeAge, changeNum, nPlusNum, plusNum, removeItem } from '../redux/store';


const Cart = () => {
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();//변경 함수를 사용할수 있게 해주는 함수
  



  
  

  return (
  <Table>
   <thead>     
     <tr>
        <th>번호</th>
        <th>상품명</th>
        <th>수량</th>
        <th>수정</th>
        <th>삭제</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((cart, i)=>{
          return (
          <tr key={i}>
            <td>{cart.id}</td>
            <td>{cart.title}</td>
            <td>{cart.count}</td>
            <td><button onClick={()=>{
              dispatch(addCount(i));
            }}>+</button></td>
            <td><button onClick={()=>{
              dispatch(removeItem(i));
            }}>X</button></td>
          </tr>
          )
        })
      }
            


    </tbody>
  </Table>

  
  );
};

export default Cart;