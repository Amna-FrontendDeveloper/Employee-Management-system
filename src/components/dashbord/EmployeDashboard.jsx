
import Header from "../other/Header"
import Task_List_Numbers from "../other/Task_List_Numbers"
import TaskList from "../tasklist/TaskList"
import PropTypes from 'prop-types';


const EmployeDashboard =(props)=> {
  
    return (
        <div className="h-screen p-10 bg-[#1C1C1C]">
          
            <Header  changeUser ={props.changeUser}  data = {props.data} />
            <Task_List_Numbers data = {props.data}  />
            <TaskList data = {props.data}  />
        </div>
    )
}
EmployeDashboard.propTypes = {
    data: PropTypes.any.isRequired,
    changeUser: PropTypes.func.isRequired
};


export default EmployeDashboard