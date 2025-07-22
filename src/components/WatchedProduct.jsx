import './WatchedProduct.css'
import bg from'../bg.jpg'
import { useSelector } from 'react-redux';

const WatchedProduct = ({fruit}) => {

  const watched = useSelector(state => state.watched);

  
//렌더링을 안해서 화면에 반영이 안됨.스토리지에만 있음
console.log(watched);


  return (
    <div className='WatchedProduct'>
      <div className='cards'>
        <p>최근 본 상품</p>
       {
        watched.map((i)=>{
          return(
          <div className='card' key={i}>
            <img src={bg} alt="" />
            <p>{fruit[i].title}</p>
          </div>

          )
        })
       }
      </div>
      
    </div>
  );
};

export default WatchedProduct;