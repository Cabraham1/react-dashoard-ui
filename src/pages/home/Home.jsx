import './home.scss'
import Sidebar from '../../components/sideBar/Sidebar'
import NavBar from '../../components/navBar/NavBar'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>  
      <div className="home__container">
        <NavBar/>
      <div className="widgets">
        <Widget type='user'/>
        <Widget type='order'/>
        <Widget type='earning'/>
        <Widget type='balance'/>
      </div>
      <div className="chart__container">
        <Featured />
        <Chart />
      </div>
      </div>    
    </div>
  )
}

export default Home