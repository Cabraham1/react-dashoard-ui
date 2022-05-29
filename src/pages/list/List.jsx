import './list.scss'
import Sidebar from "../../components/sideBar/Sidebar"
import Navbar from "../../components/navBar/NavBar"
import Datatable from "../../components/datatable/Datatable"

const List = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default List