import AllTasks from "../other/AllTasks"
import CreateTask from "../other/CreateTask"
import Header from "../other/Header"
import PropTypes from 'prop-types'


const Admin = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser ={props.changeUser} />
      <CreateTask />
      <AllTasks />

    </div>
  )
}

Admin.propTypes = {
  changeUser: PropTypes.func.isRequired
};

export default Admin