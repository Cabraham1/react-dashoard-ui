import './home.scss'
import Sidebar from '../../components/sideBar/Sidebar'
import NavBar from '../../components/navBar/NavBar'
import Widget from '../../components/widgets/Widget'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>  
      <div className="home__container">
        <NavBar/>
      <div className="widgets">
        <Widget/>
        <Widget/>
        <Widget/>
        <Widget/>
      </div>
      </div>    
    </div>
  )
}

export default Home