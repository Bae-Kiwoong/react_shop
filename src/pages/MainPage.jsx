import Card from "../components/Card";






const MainPage = ({fruit}) => {
  return (
<>
  <div className="main-bg"></div>
    <div className="container">
      <div className="row">
    
{
  fruit.map((data , i)=> {
    return(
      <Card data={data} key={i} />
      
      
    )
  })
}



        
      </div>
    </div>
</>
  );
};

export default MainPage;