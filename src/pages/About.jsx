import { Outlet } from 'react-router-dom';


const About = () => {
  return (
    <div>
      <Outlet />
      <button>회사 소개</button>
      <button>연혁</button>
      <button>오시는 길</button>
    </div>
  )
}

export default About;